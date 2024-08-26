﻿using AutoMapper;

using FluentValidation.Internal;
using FluentValidation.Results;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Newtonsoft.Json;

using System.Globalization;

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

        private PropertyDataManager _dataManager;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public RequestsController(ApplicationDbContext dbContext, 
            IMapper mapper, 
            PropertyRequestValidator validator,
            IWebHostEnvironment webHostEnvironment,
            EmailManager emailManager,
            PropertyDataManager dataManager)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _propertyRequestValidator = validator;
            _webHostEnvironment = webHostEnvironment;
            _emailManager = emailManager;
            _dataManager = dataManager;
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

            return Response.Message("Property Submitted Successfully", new { propertyId = property.Id, email = userDetail.Email });
        }

        /// <summary>
        /// Verifies the otp
        /// </summary>
        /// <param name="verifyDTO"></param>
        /// <returns></returns>
        [HttpPost("verify")]
        public async Task<ActionResult> VerifyOtp([FromBody] OtpVerifyDTO verifyDTO)
        {
            Console.WriteLine(JsonConvert.SerializeObject(verifyDTO));
            if(verifyDTO == null)
            {
                return Response.Error("Invalid Data");
            }

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
        public async Task<ActionResult> GetSubmittedRequests()
        {
            string? page = Request.Query["page"];
            string? searchWord = Request.Query["text"];
            string? propertyType = Request.Query["type"];
            string? location = Request.Query["location"];
            string? purpose = Request.Query["purpose"];
            string? status = Request.Query["status"];
            string? orderBy = Request.Query["order"];
            string? from = Request.Query["from"];
            string? to = Request.Query["to"];
            const int RESULTS_PER_PAGE = 12;
            int totalPages = 0;

            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.Submission == PropertySubmission.Secondary && p.IsVerified)
                .Include(property => property.Overview)
                .Include(property => property.Files)
                .Include(property => property.Features)
                .Include(property => property.KeyHighlights)
                .Include(property => property.UserDetail)
                .ToListAsync();

            if (!string.IsNullOrEmpty(searchWord))
            {
                searchWord = searchWord.ToLower();
                properties = properties
                    .Where(p => p.Title.ToLower().Contains(searchWord) || (!string.IsNullOrEmpty(p.Tags) && p.Tags.ToLower().Contains(searchWord)))
                    .ToList();
            }

            if (!string.IsNullOrEmpty(purpose))
            {
                int _purpose = int.Parse(purpose);
                PropertyPurpose propertyPurpose = (PropertyPurpose)_purpose;
                properties = properties
                    .Where(p => p.Purpose == propertyPurpose)
                    .ToList();
            }

            if (!string.IsNullOrEmpty(propertyType))
            {
                int _propertyType = int.Parse(propertyType);
                properties = properties
                    .Where(p => p.PropertyType == _propertyType)
                    .ToList();
            }

            if (!string.IsNullOrEmpty(location))
            {
                int _location = int.Parse(location);
                properties = properties
                    .Where(p => p.location == _location)
                    .ToList();
            }

            if (!string.IsNullOrEmpty(status))
            {
                int _status = int.Parse(status);
                PropertyStatus propertyStatus = (PropertyStatus)_status;
                properties = properties
                    .Where(p => p.ApprovalStatus == propertyStatus)
                    .ToList();
            }

            if (!string.IsNullOrEmpty(from))
            {
                DateTime fromDate;
                if (DateTime.TryParseExact(from, "MM/dd/yyyy", CultureInfo.CurrentCulture, DateTimeStyles.None, out fromDate))
                {
                    properties = properties.Where(p => p.DateAdded >= fromDate).ToList();
                }
            }

            if (!string.IsNullOrEmpty(to))
            {
                DateTime toDate;
                if (DateTime.TryParseExact(to, "MM/dd/yyyy", CultureInfo.CurrentCulture, DateTimeStyles.None, out toDate))
                {
                    properties = properties.Where(p => p.DateAdded <= toDate).ToList();
                }
            }

            if (!string.IsNullOrEmpty(orderBy))
            {
                string[] availableOptions = ["PriceASC", "PriceDESC", "DateASC", "DateDESC"];
                if (availableOptions.Contains(orderBy))
                {
                    switch (orderBy)
                    {
                        case "PriceASC":
                            properties = properties.OrderBy(p => p.Price).ToList();
                            break;
                        case "PriceDESC":
                            properties = properties.OrderByDescending(p => p.Price).ToList();
                            break;
                        case "DateASC":
                            properties = properties.OrderBy(p => p.DateAdded).ToList();
                            break;
                        case "DateDESC":
                            properties = properties.OrderByDescending(p => p.DateAdded).ToList();
                            break;
                    }
                }
            }

            if (!string.IsNullOrEmpty(page))
            {
                int pageNumber = 0;
                if (int.TryParse(page, out pageNumber))
                {
                    if (pageNumber > 0)
                    {
                        totalPages = (int)Math.Ceiling(properties.Count / (double)RESULTS_PER_PAGE);
                        int start = (pageNumber - 1) * RESULTS_PER_PAGE;
                        properties = properties
                            .Skip(start)
                            .Take(RESULTS_PER_PAGE)
                            .ToList();
                    }
                }
            }

            return Response.Message(new { properties = _dataManager.IncludeData(properties), pages = totalPages });
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
        public async Task<ActionResult> GetSubmittedRequest(int id)
        {
            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.Submission == PropertySubmission.Secondary && p.Id == id)
                .Include(property => property.Overview)
                .Include(property => property.Files)
                .Include(property => property.Features)
                .Include(property => property.KeyHighlights)
                .Include(property => property.UserDetail)
                .ToListAsync();

            PropertyReadDTO? readDTO = _dataManager.IncludeData(properties).FirstOrDefault();

            if(readDTO == null)
            {
                return Response.Error("Property Request Not Found", 404);
            }
            else
            {
                return Response.Message(readDTO);
            }
        }

        #endregion
    }
}
