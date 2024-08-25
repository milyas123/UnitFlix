using AutoMapper;

using FluentValidation.Results;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.EntityFrameworkCore;

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

        private PropertyDataManager _dataManager;

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
            ProjectUpdateValidator projectUpdateValidator,
            PropertyDataManager dataManager)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _webHostEnvironment = webHostEnvironment;
            _propertyValidator = propertyValidator;
            _projectValidator = projectValidator;
            _propertyUpdateValidator = propertyUpdateValidator;
            _projectUpdateValidator = projectUpdateValidator;
            _dataManager = dataManager;
        }

        #endregion

        #region Routes

        /// <summary>
        /// Returns list of all of the properties
        /// </summary>
        /// <returns></returns>
        [HttpGet("all")]
        public async Task<ActionResult> GetAllProperties()
        {
            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToListAsync();
            return Response.Message(_dataManager.IncludeData(properties)); 
        }

        /// <summary>
        /// Returns a single property
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetProperty(int id)
        {
            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.Id == id && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Overview)
                .Include(property => property.Files)
                .Include(property => property.Features)
                .Include(property => property.KeyHighlights)
                .Include(property => property.PaymentPlanItems)
                .Include(property => property.PropertyDetails)
                .ToListAsync();

            PropertyReadDTO? readDTO = _dataManager.IncludeData(properties).FirstOrDefault();

            if(readDTO == null)
            {
                return Response.Error("Property not found", 404);
            }

            return Response.Message(readDTO);
        }

        /// <summary>
        /// Returns the list of properties for a location id
        /// </summary>
        /// <param name="locationId"></param>
        /// <returns></returns>
        [HttpGet("location/{locationId:int}")]
        public async Task<ActionResult> GetPropertiesForLocation(int locationId)
        {
            //Finding the location
            if(!_dbContext.Locations.Any(location => location.Id == locationId))
            {
                return Response.Error("Location not found", 404);
            }
            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.location == locationId && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files)
                .ToListAsync();

            return Response.Message(_dataManager.IncludeData(properties));
        }

        /// <summary>
        /// Returns list of properties for a developer
        /// </summary>
        /// <param name="developerId"></param>
        /// <returns></returns>
        [HttpGet("developer/{developerId:int}")]
        public async Task<ActionResult> GetPropertiesForDeveloper(int developerId)
        {
            if(!_dbContext.Developers.Any(dev => dev.Id == developerId))
            {
                return Response.Error("Developer not found", 404);
            }

            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.Developer.HasValue && p.Developer.Value == developerId && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files)
                .ToListAsync();

            return Response.Message(_dataManager.IncludeData(properties));
        }

        /// <summary>
        /// Returns list of properties for a property type
        /// </summary>
        /// <param name="propertyType"></param>
        /// <returns></returns>
        [HttpGet("type/{propertyType:int}")]
        public async Task<ActionResult> GetPropertiesOfType(int propertyType)
        {
            if (!_dbContext.PropertyTypes.Any(type => type.Id == propertyType))
            {
                return Response.Error("Property Type not found", 404);
            }

            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.PropertyType == propertyType && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToListAsync();

            return Response.Message(_dataManager.IncludeData(properties));
        }

        /// <summary>
        /// Returns list of properties of a category
        /// </summary>
        /// <param name="propertyCategory"></param>
        /// <returns></returns>
        [HttpGet("category/{propertyCategory}")]
        public async Task<ActionResult> GetPropertiesOfCategory(string propertyCategory)
        {
            PropertyCategory category;

            if(!Enum.TryParse(propertyCategory, out category))
            {
                return Response.Error("Invalid Property Category");
            }

            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.Category == category && p.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToListAsync();

            return Response.Message(_dataManager.IncludeData(properties));
        }

        /// <summary>
        /// Returns list of featured projects
        /// </summary>
        /// <returns></returns>
        [HttpGet("featured")]
        public async Task<ActionResult> GetFeaturedProjects()
        {
            List<Property> properties = await _dbContext
                .Properties
                .Where(p => p.Category == PropertyCategory.Project && p.ApprovalStatus == PropertyStatus.Approved && p.Featured)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToListAsync();

            return Response.Message(_dataManager.IncludeData(properties));
        }

        /// <summary>
        /// Searches the properties based on query params
        /// </summary>
        /// <returns></returns>
        [HttpGet("search")]
        public async Task<ActionResult> SearchProperties()
        {
            string? searchWord = Request.Query["text"];
            string? propertyType = Request.Query["type"];
            string? location = Request.Query["location"];
            string? category = Request.Query["category"];
            string? developer = Request.Query["developer"];
            string? minPrice = Request.Query["min"];
            string? maxPrice = Request.Query["max"];
            string? purpose = Request.Query["purpose"];
            string? page = Request.Query["page"];
            string? orderBy = Request.Query["order"];
            string? from = Request.Query["from"];
            string? to = Request.Query["to"];
            const int RESULTS_PER_PAGE = 12;
            int totalPages = 0;

            List<Property> properties = await _dbContext
                .Properties
                .Where(property => property.ApprovalStatus == PropertyStatus.Approved)
                .Include(property => property.Files)
                .ToListAsync();

            if (!string.IsNullOrEmpty(purpose))
            {
                int _purpose = int.Parse(purpose);
                PropertyPurpose propertyPurpose = (PropertyPurpose)_purpose;
                properties = properties
                    .Where(p => p.Purpose == propertyPurpose)
                    .ToList();
            }

            if (!string.IsNullOrEmpty(searchWord))
            {
                searchWord = searchWord.ToLower();
                properties = properties
                    .Where(p => p.Title.ToLower().Contains(searchWord) || (!string.IsNullOrEmpty(p.Tags) && p.Tags.ToLower().Contains(searchWord)))
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

            if (!string.IsNullOrEmpty(category))
            {
                int _category = int.Parse(category);
                PropertyCategory propertyCategory = (PropertyCategory)_category;
                properties = properties
                    .Where(p => p.Category == propertyCategory)
                    .ToList();
            }

            if (!string.IsNullOrEmpty(developer))
            {
                int _developer = int.Parse(developer);
                properties = properties
                    .Where(p => p.Developer == _developer)
                    .ToList();
            }

            if (!string.IsNullOrEmpty(minPrice))
            {
                decimal _minPrice = decimal.Parse(minPrice);
                properties = properties
                    .Where(p => p.Price >= _minPrice)
                    .ToList();
            }

            if (!string.IsNullOrEmpty(maxPrice))
            {
                decimal _maxPrice = decimal.Parse(maxPrice);
                properties = properties
                    .Where(p => p.Price <= _maxPrice)
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
                if(int.TryParse(page, out pageNumber))
                {
                    if(pageNumber > 0)
                    {
                        totalPages = (int)Math.Ceiling(properties.Count / (double)RESULTS_PER_PAGE);
                        int start = (pageNumber -  1) * RESULTS_PER_PAGE;
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
            _dbContext.Features.CreateOrUpdate(features, property.Id);

            List<KeyHighlight> keyHighlights= _mapper.Map<List<KeyHighlight>>(writeDTO.KeyHighlights);
            _dbContext.KeyHighlights.CreateOrUpdate(keyHighlights, property.Id);

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
            _dbContext.Features.CreateOrUpdate(features, property.Id);

            List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(writeDTO.KeyHighlights);
            _dbContext.KeyHighlights.CreateOrUpdate(keyHighlights, property.Id);

            List<PaymentPlanItem> paymentPlanItems = _mapper.Map<List<PaymentPlanItem>>(writeDTO.PaymentPlanItems);
            _dbContext.PaymentPlanItems.CreateOrUpdate(paymentPlanItems, property.Id);

            List<PropertyDetail> propertyDetails = _mapper.Map<List<PropertyDetail>>(writeDTO.PropertyDetails);
            _dbContext.PropertyDetails.CreateOrUpdate(propertyDetails, property.Id);

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
            _dbContext.Features.CreateOrUpdate(features, property.Id);

            //Deleting the specified key highlights
            if (updateDTO.KeyHighlightsToRemove.Count > 0)
            {
                List<KeyHighlight> keyHighlightsToRemove = await _dbContext.KeyHighlights.Where(key => updateDTO.KeyHighlightsToRemove.Contains(key.Id)).ToListAsync();
                _dbContext.KeyHighlights.RemoveRange(keyHighlightsToRemove);
            }

            List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(updateDTO.KeyHighlights);
            _dbContext.KeyHighlights.CreateOrUpdate(keyHighlights, property.Id);

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
            _dbContext.Features.CreateOrUpdate(features, property.Id);

            //Deleting the specified key highlights
            if (updateDTO.KeyHighlightsToRemove.Count > 0)
            {
                List<KeyHighlight> keyHighlightsToRemove = await _dbContext.KeyHighlights.Where(key => updateDTO.KeyHighlightsToRemove.Contains(key.Id)).ToListAsync();
                _dbContext.KeyHighlights.RemoveRange(keyHighlightsToRemove);
            }

            List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(updateDTO.KeyHighlights);
            _dbContext.KeyHighlights.CreateOrUpdate(keyHighlights, property.Id);

            //Deleting the specified payment plan items
            if (updateDTO.PaymentPlanItemsToRemove.Count > 0)
            {
                List<PaymentPlanItem> paymentPlanItemsToRemove = await _dbContext.PaymentPlanItems.Where(item => updateDTO.PaymentPlanItemsToRemove.Contains(item.Id)).ToListAsync();
                _dbContext.PaymentPlanItems.RemoveRange(paymentPlanItemsToRemove);
            }

            List<PaymentPlanItem> paymentPlanItems = _mapper.Map<List<PaymentPlanItem>>(updateDTO.PaymentPlanItems);
            _dbContext.PaymentPlanItems.CreateOrUpdate(paymentPlanItems, property.Id);

            //Deleting the specified property details
            if (updateDTO.PropertyDetailsToRemove.Count > 0)
            {
                List<PropertyDetail> propertyDetailsToRemove = await _dbContext.PropertyDetails.Where(item => updateDTO.PropertyDetailsToRemove.Contains(item.Id)).ToListAsync();
                _dbContext.PropertyDetails.RemoveRange(propertyDetailsToRemove);
            }

            List<PropertyDetail> propertyDetails = _mapper.Map<List<PropertyDetail>>(updateDTO.PropertyDetails);
            _dbContext.PropertyDetails.CreateOrUpdate(propertyDetails, property.Id);

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
