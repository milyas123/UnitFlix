using AutoMapper;

using FluentValidation.Results;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Unitflix.Server.API_DTO;
using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;
using Unitflix.Server.Results;
using Unitflix.Server.Validators;

using File = Unitflix.Server.Models.File;

namespace Unitflix.Server.Controllers
{
    [Route("property")]
    public class PropertyController : Controller
    {

        #region Private Members

        private ApplicationDbContext _dbContext;

        private IMapper _mapper;

        private IWebHostEnvironment _webHostEnvironment;

        private PropertyValidator _propertyValidator;

        private ProjectValidator _projectValidator;

        private PropertyUpdateValidator _propertyUpdateValidator;

        private ProjectUpdateValidator _projectUpdateValidator;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public PropertyController(ApplicationDbContext dbContext,
            IMapper mapper,
            IWebHostEnvironment webHostEnvironment,
            PropertyValidator propertyValidator,
            ProjectValidator projectValidator,
            PropertyUpdateValidator propertyUpdateValidator,
            ProjectUpdateValidator projectUpdateValidator)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _webHostEnvironment = webHostEnvironment;
            _propertyValidator = propertyValidator;
            _projectValidator = projectValidator;
            _propertyUpdateValidator = propertyUpdateValidator;
            _projectUpdateValidator = projectUpdateValidator;
        }

        #endregion

        #region Routes

        /// <summary>
        /// Returns list of all of the properties
        /// </summary>
        /// <returns></returns>
        [HttpGet("all")]
        public JsonResult GetAllProperties()
        {
            var data = Request;
            List<Property> properties = _dbContext
                .Properties
                .Where(p => p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToList();
            return Response.Message(properties); 
        }

        /// <summary>
        /// Returns a single property
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id:int}")]
        public ActionResult GetProperty(int id)
        {
            Property? property = _dbContext
                .Properties
                .Where(p => p.Id == id && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Overview)
                .Include(property => property.Files)
                .Include(property => property.Features)
                .Include(property => property.KeyHighlights)
                .Include(property => property.PaymentPlanItems)
                .Include(property => property.PropertyDetails)
                .FirstOrDefault();

            if(property == null)
            {
                return Response.Error("Property not found", 404);
            }

            return Response.Message(property);
        }

        /// <summary>
        /// Returns the list of properties for a location id
        /// </summary>
        /// <param name="locationId"></param>
        /// <returns></returns>
        [HttpGet("location/{locationId:int}")]
        public ActionResult GetPropertiesForLocation(int locationId)
        {
            //Finding the location
            if(!_dbContext.Locations.Any(location => location.Id == locationId))
            {
                return Response.Error("Location not found", 404);
            }

            List<Property> properties = _dbContext
                .Properties
                .Where(p => p.location == locationId && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToList();

            return Response.Message(properties);
        }

        /// <summary>
        /// Returns list of properties for a developer
        /// </summary>
        /// <param name="developerId"></param>
        /// <returns></returns>
        [HttpGet("developer/{developerId:int}")]
        public ActionResult GetPropertiesForDeveloper(int developerId)
        {
            if(!_dbContext.Developers.Any(dev => dev.Id == developerId))
            {
                return Response.Error("Developer not found", 404);
            }

            List<Property> properties = _dbContext
                .Properties
                .Where(p => p.Developer.HasValue && p.Developer.Value == developerId && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToList();

            return Response.Message(properties);
        }

        /// <summary>
        /// Returns list of properties for a property type
        /// </summary>
        /// <param name="propertyType"></param>
        /// <returns></returns>
        [HttpGet("type/{propertyType:int}")]
        public ActionResult GetPropertiesOfType(int propertyType)
        {
            if (!_dbContext.PropertyTypes.Any(type => type.Id == propertyType))
            {
                return Response.Error("Property Type not found", 404);
            }

            List<Property> properties = _dbContext
                .Properties
                .Where(p => p.PropertyType == propertyType && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToList();

            return Response.Message(properties);
        }

        /// <summary>
        /// Returns list of properties of a category
        /// </summary>
        /// <param name="propertyCategory"></param>
        /// <returns></returns>
        [HttpGet("category/{propertyCategory}")]
        public ActionResult GetPropertiesOfCategory(string propertyCategory)
        {
            PropertyCategory category;

            if(!Enum.TryParse(propertyCategory, out category))
            {
                return Response.Error("Invalid Property Category");
            }

            List<Property> properties = _dbContext
                .Properties
                .Where(p => p.Category == category && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToList();

            return Response.Message(properties);
        }

        /// <summary>
        /// Returns list of featured projects
        /// </summary>
        /// <returns></returns>
        [HttpGet("featured")]
        public ActionResult GetFeaturedProjects()
        {
            List<Property> properties = _dbContext
                .Properties
                .Where(p => p.Category == PropertyCategory.Project && p.ApprovalStatus == PropertyStatus.Approved && p.Featured)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToList();

            return Response.Message(properties);
        }

        /// <summary>
        /// Creates a Primary Property submitted by an admin
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpPost("create-property")]
        public async Task<ActionResult> CreateProperty([FromForm]PropertyWirteAPIDTO propertyData)
        {
            PropertyWriteDTO writeDTO = _mapper.Map<PropertyWriteDTO>(propertyData);

            ValidationResult validationResult = await _propertyValidator.ValidateAsync(writeDTO);

            if(!validationResult.IsValid)
            {
                return Response.Error(validationResult.Errors);
            }

            Property property = _mapper.Map<Property>(writeDTO);
            property.Developer = null;
            property.ApprovalStatus = PropertyStatus.Approved;
            property.Submission = PropertySubmission.Primary;
            property.DateAdded = DateTime.Now;
            property.IsVerified = true;
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

            foreach(IFormFile galleryImage in writeDTO.GalleryImages)
            {
                FileSaveResult? galleryImageResult = await galleryImage.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());
                if (galleryImageResult != null)
                {
                    File file = new File()
                    {
                        Filename = galleryImageResult.FileName,
                        Purpose = FilePurpose.Gallery,
                        PropertyId = property.Id,
                        Url = galleryImageResult.Url,
                        Type = galleryImageResult.Type
                    };
                    _dbContext.Files.Add(file);
                }
            }

            _dbContext.SaveChanges();
            return Response.Message("Property Added Successfully");
        }

        /// <summary>
        /// Creates a project submitted by an admin
        /// </summary>
        /// <param name="propertyData"></param>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpPost("create-project")]
        public async Task<ActionResult> CreateProject([FromForm]PropertyWirteAPIDTO propertyData)
        {
            PropertyWriteDTO writeDTO = _mapper.Map<PropertyWriteDTO>(propertyData);

            ValidationResult validationResult = await _projectValidator.ValidateAsync(writeDTO);

            if(!validationResult.IsValid)
            {
                return Response.Error(validationResult.Errors);
            }

            Property property = _mapper.Map<Property>(writeDTO);
            property.ApprovalStatus = PropertyStatus.Approved;
            property.Submission = PropertySubmission.Primary;
            property.DateAdded = DateTime.Now;
            property.IsVerified = true;
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

            List<PaymentPlanItem> paymentPlanItems = _mapper.Map<List<PaymentPlanItem>>(writeDTO.PaymentPlanItems);
            paymentPlanItems.ForEach(paymentPlan => paymentPlan.PropertyId = property.Id);
            _dbContext.PaymentPlanItems.AddRange(paymentPlanItems);

            List<PropertyDetail> propertyDetails = _mapper.Map<List<PropertyDetail>>(writeDTO.PropertyDetails);
            propertyDetails.ForEach(propertyDetail => propertyDetail.PropertyId = property.Id);
            _dbContext.PropertyDetails.AddRange(propertyDetails);

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

            if(writeDTO.Brochure != null)
            {
                FileSaveResult? brochureResult = await writeDTO.Brochure.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());

                if (brochureResult != null)
                {
                    File file = new File()
                    {
                        Filename = brochureResult.FileName,
                        Purpose = FilePurpose.Brochure,
                        PropertyId = property.Id,
                        Url = brochureResult.Url,
                        Type = brochureResult.Type
                    };
                    _dbContext.Files.Add(file);
                }
            }

            if (writeDTO.FloorPlan != null)
            {
                FileSaveResult? floorPlanResult = await writeDTO.FloorPlan.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());

                if (floorPlanResult != null)
                {
                    File file = new File()
                    {
                        Filename = floorPlanResult.FileName,
                        Purpose = FilePurpose.Brochure,
                        PropertyId = property.Id,
                        Url = floorPlanResult.Url,
                        Type = floorPlanResult.Type
                    };
                    _dbContext.Files.Add(file);
                }
            }

            foreach(IFormFile galleryImage in writeDTO.GalleryImages)
            {
                FileSaveResult? galleryImageResult = await galleryImage.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());
                if (galleryImageResult != null)
                {
                    File file = new File()
                    {
                        Filename = galleryImageResult.FileName,
                        Purpose = FilePurpose.Gallery,
                        PropertyId = property.Id,
                        Url = galleryImageResult.Url,
                        Type = galleryImageResult.Type
                    };
                    _dbContext.Files.Add(file);
                }
            }

            _dbContext.SaveChanges();
            return Response.Message("Project Added Successfully");
        }

        /// <summary>
        /// Updates the specified property
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpPut("update-property/{id:int}")]
        public async Task<ActionResult> EditProperty(int id, [FromForm] PropertyUpdateAPIDTO propertyData)
        {
            //Getting the property
            Property? property = await _dbContext.Properties.Where(p => p.Id == id).FirstOrDefaultAsync();

            if(property == null)
            {
                return Response.Error("Property not found", 404);
            }
            else if (property.Category != PropertyCategory.Property)
            {
                return Response.Error("Can only update a property via this API");
            }

            PropertyUpdateDTO updateDTO = _mapper.Map<PropertyUpdateDTO>(propertyData);

            ValidationResult validationResult = await _propertyUpdateValidator.ValidateAsync(updateDTO);

            if(!validationResult.IsValid)
            {
                return Response.Error(validationResult.Errors);
            }

            property = _mapper.Map(updateDTO, property);
            _dbContext.Properties.Update(property);

            if(updateDTO.Overview != null)
            {
                Overview overview = _dbContext.Overviews.Where(o => o.PropertyId == property.Id).First();
                overview = _mapper.Map(updateDTO.Overview, overview);
                _dbContext.Overviews.Update(overview);
            }

            //Deleting the specified Features
            if(updateDTO.FeaturesToRemove.Count > 0)
            {
                List<Feature> featuresToRemove = await _dbContext.Features.Where(f => updateDTO.FeaturesToRemove.Contains(f.Id)).ToListAsync();
                _dbContext.Features.RemoveRange(featuresToRemove);
            }

            List<Feature> features = _mapper.Map<List<Feature>>(updateDTO.Features);
            features.ForEach(feature => feature.PropertyId = property.Id);
            _dbContext.Features.AddRange(features);

            //Deleting the specified key highlights
            if (updateDTO.KeyHighlightsToRemove.Count > 0)
            {
                List<KeyHighlight> keyHighlightsToRemove = await _dbContext.KeyHighlights.Where(key => updateDTO.KeyHighlightsToRemove.Contains(key.Id)).ToListAsync();
                _dbContext.KeyHighlights.RemoveRange(keyHighlightsToRemove);
            }

            List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(updateDTO.KeyHighlights);
            keyHighlights.ForEach(keyHighlight => keyHighlight.PropertyId = property.Id);
            _dbContext.KeyHighlights.AddRange(keyHighlights);

            //If a new cover image is specified we need to delete the previous one
            if(updateDTO.CoverImage != null)
            {
                //Finding the previous Cover Image
                File? existingFile = await _dbContext.Files.Where(file => file.PropertyId == id && file.Purpose == FilePurpose.Cover).FirstOrDefaultAsync();

                if(existingFile != null)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, existingFile.Filename);
                    _dbContext.Files.Remove(existingFile);
                }

                FileSaveResult? result = await updateDTO.CoverImage.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());

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
            }

            if(updateDTO.GalleryImagesToRemove.Count > 0)
            {
                List<File> galleryImagesToRemove = await _dbContext.Files.Where(file => updateDTO.GalleryImagesToRemove.Contains(file.Id) && file.Purpose == FilePurpose.Gallery).ToListAsync();
                galleryImagesToRemove.ForEach(image =>
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, image.Filename);
                });
                _dbContext.Files.RemoveRange(galleryImagesToRemove);
            }

            foreach(IFormFile galleryImage in updateDTO.GalleryImages)
            {
                FileSaveResult? galleryImageResult = await galleryImage.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());
                if (galleryImageResult != null)
                {
                    File file = new File()
                    {
                        Filename = galleryImageResult.FileName,
                        Purpose = FilePurpose.Gallery,
                        PropertyId = property.Id,
                        Url = galleryImageResult.Url,
                        Type = galleryImageResult.Type
                    };
                    _dbContext.Files.Add(file);
                }
            }

            _dbContext.SaveChanges();
            return Response.Message("Property Updated Successfully");

        }

        /// <summary>
        /// Updates the specified property
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpPut("update-project/{id:int}")]
        public async Task<ActionResult> EditProject(int id, [FromForm] PropertyUpdateAPIDTO propertyData)
        {
            //Getting the property
            Property? property = await _dbContext.Properties.Where(p => p.Id == id).FirstOrDefaultAsync();

            if (property == null)
            {
                return Response.Error("Project not found", 404);
            }
            else if (property.Category != PropertyCategory.Project)
            {
                return Response.Error("Can only update a project via this API");
            }

            PropertyUpdateDTO updateDTO = _mapper.Map<PropertyUpdateDTO>(propertyData);

            ValidationResult validationResult = await _projectUpdateValidator.ValidateAsync(updateDTO);

            if (!validationResult.IsValid)
            {
                return Response.Error(validationResult.Errors);
            }

            property = _mapper.Map(updateDTO, property);
            _dbContext.Properties.Update(property);

            if (updateDTO.Overview != null)
            {
                Overview overview = _dbContext.Overviews.Where(o => o.PropertyId == property.Id).First();
                overview = _mapper.Map(updateDTO.Overview, overview);
                _dbContext.Overviews.Update(overview);
            }

            //Deleting the specified Features
            if (updateDTO.FeaturesToRemove.Count > 0)
            {
                List<Feature> featuresToRemove = await _dbContext.Features.Where(f => updateDTO.FeaturesToRemove.Contains(f.Id)).ToListAsync();
                _dbContext.Features.RemoveRange(featuresToRemove);
            }

            List<Feature> features = _mapper.Map<List<Feature>>(updateDTO.Features);
            features.ForEach(feature => feature.PropertyId = property.Id);
            _dbContext.Features.AddRange(features);

            //Deleting the specified key highlights
            if (updateDTO.KeyHighlightsToRemove.Count > 0)
            {
                List<KeyHighlight> keyHighlightsToRemove = await _dbContext.KeyHighlights.Where(key => updateDTO.KeyHighlightsToRemove.Contains(key.Id)).ToListAsync();
                _dbContext.KeyHighlights.RemoveRange(keyHighlightsToRemove);
            }

            List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(updateDTO.KeyHighlights);
            keyHighlights.ForEach(keyHighlight => keyHighlight.PropertyId = property.Id);
            _dbContext.KeyHighlights.AddRange(keyHighlights);

            //Deleting the specified payment plan items
            if (updateDTO.PaymentPlanItemsToRemove.Count > 0)
            {
                List<PaymentPlanItem> paymentPlanItemsToRemove = await _dbContext.PaymentPlanItems.Where(item => updateDTO.PaymentPlanItemsToRemove.Contains(item.Id)).ToListAsync();
                _dbContext.PaymentPlanItems.RemoveRange(paymentPlanItemsToRemove);
            }

            List<PaymentPlanItem> paymentPlanItems = _mapper.Map<List<PaymentPlanItem>>(updateDTO.PaymentPlanItems);
            paymentPlanItems.ForEach(paymentPlan => paymentPlan.PropertyId = property.Id);
            _dbContext.PaymentPlanItems.AddRange(paymentPlanItems);

            //Deleting the specified property details
            if (updateDTO.PropertyDetailsToRemove.Count > 0)
            {
                List<PropertyDetail> propertyDetailsToRemove = await _dbContext.PropertyDetails.Where(item => updateDTO.PropertyDetailsToRemove.Contains(item.Id)).ToListAsync();
                _dbContext.PropertyDetails.RemoveRange(propertyDetailsToRemove);
            }

            List<PropertyDetail> propertyDetails = _mapper.Map<List<PropertyDetail>>(updateDTO.PropertyDetails);
            propertyDetails.ForEach(propertyDetail => propertyDetail.PropertyId = property.Id);
            _dbContext.PropertyDetails.AddRange(propertyDetails);

            //If a new cover image is specified we need to delete the previous one
            if (updateDTO.CoverImage != null)
            {
                //Finding the previous Cover Image
                File? existingFile = await _dbContext.Files.Where(file => file.PropertyId == id && file.Purpose == FilePurpose.Cover).FirstOrDefaultAsync();

                if (existingFile != null)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, existingFile.Filename);
                    _dbContext.Files.Remove(existingFile);
                }

                FileSaveResult? result = await updateDTO.CoverImage.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());

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
            }

            //If a new pdf file is specified for the brochure
            if (updateDTO.Brochure != null)
            {
                //Finding the previous Cover Image
                File? existingFile = await _dbContext.Files.Where(file => file.PropertyId == id && file.Purpose == FilePurpose.Brochure).FirstOrDefaultAsync();

                if (existingFile != null)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, existingFile.Filename);
                    _dbContext.Files.Remove(existingFile);
                }

                FileSaveResult? result = await updateDTO.Brochure.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());

                if (result != null)
                {
                    File file = new File()
                    {
                        Filename = result.FileName,
                        Purpose = FilePurpose.Brochure,
                        PropertyId = property.Id,
                        Url = result.Url,
                        Type = result.Type
                    };
                    _dbContext.Files.Add(file);
                }
            }

            //If a new Floor Plan file is specified for the brochure
            if (updateDTO.FloorPlan != null)
            {
                //Finding the previous Cover Image
                File? existingFile = await _dbContext.Files.Where(file => file.PropertyId == id && file.Purpose == FilePurpose.FloorPlan).FirstOrDefaultAsync();

                if (existingFile != null)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, existingFile.Filename);
                    _dbContext.Files.Remove(existingFile);
                }

                FileSaveResult? result = await updateDTO.FloorPlan.Save(_webHostEnvironment, Request.Scheme, Request.Host.ToString());

                if (result != null)
                {
                    File file = new File()
                    {
                        Filename = result.FileName,
                        Purpose = FilePurpose.FloorPlan,
                        PropertyId = property.Id,
                        Url = result.Url,
                        Type = result.Type
                    };
                    _dbContext.Files.Add(file);
                }
            }

            if (updateDTO.GalleryImagesToRemove.Count > 0)
            {
                List<File> galleryImagesToRemove = await _dbContext.Files.Where(file => updateDTO.GalleryImagesToRemove.Contains(file.Id) && file.Purpose == FilePurpose.Gallery).ToListAsync();
                galleryImagesToRemove.ForEach(image =>
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, image.Filename);
                });
                _dbContext.Files.RemoveRange(galleryImagesToRemove);
            }

            foreach(IFormFile galleryImage in updateDTO.GalleryImages)
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
            }

            _dbContext.SaveChanges();
            return Response.Message("Project Updated Successfully");

        }

        /// <summary>
        /// Deletes both property and project
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteProperty(int id)
        {
            Property? property = await _dbContext.Properties.Where(p => p.Id == id).FirstOrDefaultAsync();

            if(property == null)
            {
                return Response.Error("Property not found", 404);
            }

            _dbContext.Properties.Remove(property);

            List<Overview> overviews = await _dbContext.Overviews.Where(t => t.PropertyId == id).ToListAsync();
            _dbContext.Overviews.RemoveRange(overviews);

            List<Feature> features = await _dbContext.Features.Where(f => f.PropertyId == id).ToListAsync();
            _dbContext.Features.RemoveRange(features);

            List<KeyHighlight> keyHighlights = await _dbContext.KeyHighlights.Where(k => k.PropertyId == id).ToListAsync();
            _dbContext.KeyHighlights.RemoveRange(keyHighlights);

            if(property.Category == PropertyCategory.Project)
            {
                List<PropertyDetail> propertyDetails = await _dbContext.PropertyDetails.Where(d => d.PropertyId == id).ToListAsync();
                _dbContext.PropertyDetails.RemoveRange(propertyDetails);

                List<PaymentPlanItem> paymentPlanItems = await _dbContext.PaymentPlanItems.Where(p => p.PropertyId == id).ToListAsync();
                _dbContext.PaymentPlanItems.RemoveRange(paymentPlanItems);
            }

            List<File> files = await _dbContext.Files.Where(f => f.PropertyId == id).ToListAsync();
            files.ForEach(file =>
            {
                FileHelpers.DeleteFile(_webHostEnvironment, file.Filename);
            });
            _dbContext.Files.RemoveRange(files);
            _dbContext.SaveChanges();
            return Response.Message($"{(property.Category == PropertyCategory.Project ? "Project" : "Property")} deleted successfully");
        }

        #endregion
    }
}
