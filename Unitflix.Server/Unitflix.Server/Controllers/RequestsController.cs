using AutoMapper;

using FluentValidation.Internal;
using FluentValidation.Results;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Unitflix.Server.API_DTO;
using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Managers;
using Unitflix.Server.Models;
using Unitflix.Server.Results;
using Unitflix.Server.Validators;

using File = Unitflix.Server.Models.File;

namespace Unitflix.Server.Controllers
{
    [Route("request")]
    public class RequestsController : Controller
    {
        #region Private Properties

        private ApplicationDbContext _dbContext;

        private IMapper _mapper;

        private PropertyRequestValidator _propertyRequestValidator;

        private IWebHostEnvironment _webHostEnvironment;

        private EmailManager _emailManager;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public RequestsController(ApplicationDbContext dbContext, 
            IMapper mapper, 
            PropertyRequestValidator validator,
            IWebHostEnvironment webHostEnvironment,
            EmailManager emailManager)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _propertyRequestValidator = validator;
            _webHostEnvironment = webHostEnvironment;
            _emailManager = emailManager;
        }

        #endregion

        #region Routes

        /// <summary>
        /// Submits a request for a property to the admin
        /// </summary>
        /// <param name="requestData"></param>
        /// <returns></returns>
        [HttpPost("")]
        public async Task<ActionResult> SubmitRequest([FromForm] PropertyWirteAPIDTO requestData)
        {
            PropertyWriteDTO writeDTO = _mapper.Map<PropertyWriteDTO>(requestData);

            ValidationResult validationResult = await _propertyRequestValidator.ValidateAsync(writeDTO);

            if (!validationResult.IsValid)
            {
                return Response.Error(validationResult.Errors);
            }

            Property property = _mapper.Map<Property>(writeDTO);
            property.Developer = null;
            property.ApprovalStatus = PropertyStatus.Pending;
            property.Submission = PropertySubmission.Secondary;
            property.DateAdded = DateTime.Now;
            property.IsVerified = false;
            _dbContext.Properties.Add(property);
            _dbContext.SaveChanges();

            Overview overview = _mapper.Map<Overview>(writeDTO.Overview);
            overview.PropertyId = property.Id;
            _dbContext.Overviews.Add(overview);

            List<Feature> features = _mapper.Map<List<Feature>>(writeDTO.Features);
            features.ForEach(feature => feature.PropertyId = property.Id);
            _dbContext.Features.AddRange(features);

            List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(writeDTO.KeyHighlights);
            keyHighlights.ForEach(keyHighlight => keyHighlight.PropertyId = property.Id);
            _dbContext.KeyHighlights.AddRange(keyHighlights);

            UserDetail userDetail = _mapper.Map<UserDetail>(writeDTO.UserDetail);
            userDetail.PropertyId = property.Id;
            _dbContext.UserDetails.Add(userDetail);

            FileSaveResult? result = await writeDTO.CoverImage.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());

            if (result != null)
            {
                File file = new File()
                {
                    Filename = result.FileName,
                    Purpose = FilePurpose.Cover,
                    PropertyId = property.Id,
                    Url = result.Url,
                    Type = result.Type
                };
                _dbContext.Files.Add(file);
            }

            writeDTO.GalleryImages.ForEach(async galleryImage =>
            {
                FileSaveResult? result = await galleryImage.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());
                if (result != null)
                {
                    File file = new File()
                    {
                        Filename = result.FileName,
                        Purpose = FilePurpose.Gallery,
                        PropertyId = property.Id,
                        Url = result.Url,
                        Type = result.Type
                    };
                    _dbContext.Files.Add(file);
                }
            });

            _dbContext.SaveChanges();

            //Generating an otp code
            string otpCode = OtpCodeGenerator.Generate();
            Otp otp = new Otp()
            {
                Code = otpCode,
                ExpiresAt = DateTime.Now.AddMinutes(10),
                PropertyId = property.Id,
                Email = userDetail.Email,
            };
            _dbContext.Otps.Add(otp);
            _dbContext.SaveChanges();

            //Sending OTP
            await _emailManager.SendEmail(userDetail.Email, "Unitflix OTP Request", $"Hi {userDetail.Name} your property request has been received. This is your OTP {otpCode} code which will expire in 10 Minutes. Verify this to ensure that your request is submitted.");

            return Response.Message("Property Submitted Successfully");
        }

        /// <summary>
        /// Verifies the otp
        /// </summary>
        /// <param name="verifyDTO"></param>
        /// <returns></returns>
        [HttpPost("verify")]
        public async Task<ActionResult> VerifyOtp([FromBody] OtpVerifyDTO verifyDTO)
        {
            if(string.IsNullOrEmpty(verifyDTO.Email))
            {
                return Response.Error("Invalid Email");
            }

            Otp? otpResult = await _dbContext.Otps.Where(otp => otp.Code == verifyDTO.Otp && otp.Email == verifyDTO.Email && otp.PropertyId == verifyDTO.PropertyId).FirstOrDefaultAsync();

            if(otpResult == null || otpResult.ExpiresAt < DateTime.Now)
            {
                return Response.Error("Invalid Otp or either the OTP has expired");
            }
            else
            {
                //Deleting the OTP
                _dbContext.Otps.Remove(otpResult);

                Property? property = await _dbContext.Properties.Where(p => p.Id == otpResult.PropertyId).FirstOrDefaultAsync();

                if (property != null)
                {
                    property.IsVerified = true;
                    _dbContext.Properties.Update(property);
                }

                _dbContext.SaveChanges();

                return Response.Message("Otp Verified Successfully");
            }
        }

        /// <summary>
        /// Returns list of submitted requests
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpGet("")]
        public ActionResult GetSubmittedRequests()
        {
            Dictionary<int, Location> locations = _dbContext.Locations.ToDictionary(location => location.Id, location => location);
            Dictionary<int, Developer> developers = _dbContext.Developers.ToDictionary(dev => dev.Id, dev => dev);
            Dictionary<int, PropertyType> types = _dbContext.PropertyTypes.ToDictionary(type => type.Id, type => type);
            List<PropertyReadDTO> properties = _dbContext
                .Properties
                .Where(p => p.Submission == PropertySubmission.Secondary && p.IsVerified)
                .Include(property => property.Overview)
                .Include(property => property.Files)
                .Include(property => property.Features)
                .Include(property => property.KeyHighlights)
                .Include(property => property.UserDetail)
                .ToList()
                .Select(property =>
                {
                    PropertyReadDTO readDTO = _mapper.Map<PropertyReadDTO>(property);
                    readDTO.PropertyLocation = locations[property.location];
                    if (property.Developer != null)
                    {
                        readDTO.PropertyDeveloper = developers[property.Developer.Value];
                    }
                    readDTO.Type = types[property.PropertyType];
                    return readDTO;
                })
                .ToList();

            return Response.Message(properties);
        }

        /// <summary>
        /// Updates the status of the submitted request
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateStatus(int id, [FromBody]StatusUpdateDTO statusUpdate)
        {
            Property? property = await _dbContext
                .Properties
                .Where(p => p.Id == id && p.Submission == PropertySubmission.Secondary)
                .Include(property => property.UserDetail)
                .FirstOrDefaultAsync();

            if(property == null)
            {
                return Response.Error("Property not found", 404);
            }

            property.ApprovalStatus = statusUpdate.Status;
            _dbContext.Properties.Update(property);
            _dbContext.SaveChanges();

            //Sending OTP
            await _emailManager.SendEmail(property.UserDetail.Email, "Unitflix Property Status Update", $"Hi {property.UserDetail.Name}, the status of your request for property {property.Title} status has been updated to {property.ApprovalStatus.ToString()}.");

            return Response.Message("Property Status Updated Successfully");
        }

        /// <summary>
        /// Returns a single submitted request with all of the data
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpGet("{id:int}")]
        public ActionResult GetSubmittedRequest(int id)
        {
            Dictionary<int, Location> locations = _dbContext.Locations.ToDictionary(location => location.Id, location => location);
            Dictionary<int, Developer> developers = _dbContext.Developers.ToDictionary(dev => dev.Id, dev => dev);
            Dictionary<int, PropertyType> types = _dbContext.PropertyTypes.ToDictionary(type => type.Id, type => type);

            PropertyReadDTO? propertyRequest = _dbContext
                .Properties
                .Where(p => p.Submission == PropertySubmission.Secondary && p.Id == id)
                .Include(property => property.Overview)
                .Include(property => property.Files)
                .Include(property => property.Features)
                .Include(property => property.KeyHighlights)
                .Include(property => property.UserDetail)
                .ToList()
                .Select(property =>
                {
                    PropertyReadDTO readDTO = _mapper.Map<PropertyReadDTO>(property);
                    readDTO.PropertyLocation = locations[property.location];
                    if (property.Developer != null)
                    {
                        readDTO.PropertyDeveloper = developers[property.Developer.Value];
                    }
                    readDTO.Type = types[property.PropertyType];
                    return readDTO;
                })
                .FirstOrDefault();

            if(propertyRequest == null)
            {
                return Response.Error("Property Request Not Found", 404);
            }
            else
            {
                return Response.Message(propertyRequest);
            }
        }

        #endregion
    }
}
