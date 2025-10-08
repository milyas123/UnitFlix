using AutoMapper;

using FluentValidation.Results;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

using System.Globalization;

using Unitflix.Server.API_DTO;
using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Managers;
using Unitflix.Server.Models;
using Unitflix.Server.Options;
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

        private ILogger<PropertyController> _logger;

        private ImageOption _imageOption;

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
            PropertyDataManager dataManager,
            IOptions<ImageOption> imageOption,
            ILogger<PropertyController> logger)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _webHostEnvironment = webHostEnvironment;
            _propertyValidator = propertyValidator;
            _projectValidator = projectValidator;
            _propertyUpdateValidator = propertyUpdateValidator;
            _projectUpdateValidator = projectUpdateValidator;
            _dataManager = dataManager;
            _logger = logger;
            _imageOption = imageOption.Value;
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
            List<Property> properties = await _dataManager.GetProperties()
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
            List<Property> properties = await _dataManager.GetProperties()
                .Where(property => property.Id == id)
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
            List<Property> properties = await _dataManager.GetProperties()
                .Where(property => property.location == locationId)
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

            List<Property> properties = await _dataManager.GetProperties()
                .Where(p => p.Developer.HasValue && p.Developer.Value == developerId)
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

            List<Property> properties = await _dataManager.GetProperties()
                .Where(p => p.PropertyType == propertyType)
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

            List<Property> properties = await _dataManager.GetProperties()
                .Where(p => p.Category == category)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .ToListAsync();

            return Response.Message(_dataManager.IncludeData(properties));
        }

        /// <summary>
        /// Returns list of featured projects
        /// </summary>
        /// <returns></returns>
        [HttpGet("featured")]
        public async Task<ActionResult> GetFeaturedProperties()
        {
            List<Property> properties = await _dataManager.GetProperties()
                .Where(p => p.Featured)
                .Include(property => property.Files.Where(f => f.Purpose == FilePurpose.Cover))
                .OrderByDescending(p => p.DateAdded)
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
            string? status = Request.Query["status"];
            string? minPrice = Request.Query["min"];
            string? maxPrice = Request.Query["max"];
            string? purpose = Request.Query["purpose"];
            string? page = Request.Query["page"];
            string? orderBy = Request.Query["order"];
            string? from = Request.Query["from"];
            string? to = Request.Query["to"];
            const int RESULTS_PER_PAGE = 12;
            int totalPages = 0;

            List<Property> properties = await _dataManager.GetProperties()
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

                List<int> developers = await _dbContext.Developers.Where(dev => dev.Name.ToLower().Contains(searchWord)).Select(t => t.Id).ToListAsync();

                properties = properties
                    .Where(p => p.Title.ToLower().Contains(searchWord) || (!string.IsNullOrEmpty(p.Tags) && p.Tags.ToLower().Contains(searchWord)) || (p.Developer.HasValue && developers.Contains(p.Developer.Value)))
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

            if(!string.IsNullOrEmpty(status)) {
                properties = properties
                    .Where(p => p.Status.Equals(status))
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

            string[] availableOptions = ["PriceASC", "PriceDESC", "DateASC", "DateDESC"];
            if(string.IsNullOrEmpty(orderBy) || !availableOptions.Contains(orderBy))
            {
                orderBy = "DateDESC";
            }

            if (!string.IsNullOrEmpty(orderBy))
            {
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

            int totalProperties = properties.Count;
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

            return Response.Message(new { properties = _dataManager.IncludeData(properties), pages = totalPages, results = totalProperties });
        }

        /// <summary>
        /// Creates a Primary Property submitted by an admin
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpPost("create-property")]
        public async Task<ActionResult> CreateProperty([FromForm]PropertyWirteAPIDTO propertyData)
        {
            if(propertyData == null)
            {
                return Response.Error("Invalid Property Data");
            }

            PropertyWriteDTO writeDTO = _mapper.Map<PropertyWriteDTO>(propertyData);

            ValidationResult validationResult = await _propertyValidator.ValidateAsync(writeDTO);

            if(!validationResult.IsValid)
            {
                return Response.Error(validationResult.Errors);
            }

            Property property = _mapper.Map<Property>(writeDTO);
            property.Developer = null;
            property.ApprovalStatus = PropertyApprovalStatus.Approved;
            property.Submission = PropertySubmission.Primary;
            property.DateAdded = DateTime.Now;
            property.IsVerified = true;
            _dbContext.Properties.Add(property);
            try
            {
                _dbContext.SaveChanges();
            }
            catch(Exception exc)
            {
                _logger.LogError(exc, "Exception Occurred when saving the property: {message}", exc.Message);
                return Response.Error($"Error saving the property: {exc.Message}");

            }
            _logger.LogInformation("A Property has been Added by Admin With Id {propertyId}", property.Id);
            
            Overview overview = _mapper.Map<Overview>(writeDTO.Overview);
            overview.PropertyId = property.Id;
            _dbContext.Overviews.Add(overview);

            List<Feature> features = _mapper.Map<List<Feature>>(writeDTO.Features);
            _dbContext.Features.CreateOrUpdate(features, property.Id);

            List<KeyHighlight> keyHighlights= _mapper.Map<List<KeyHighlight>>(writeDTO.KeyHighlights);
            _dbContext.KeyHighlights.CreateOrUpdate(keyHighlights, property.Id);

            List<File> newFilesAdded = new List<File>();

            try
            {
                FileSaveResult? result = await writeDTO.CoverImage.Save(_webHostEnvironment, _imageOption.Url);
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
                    newFilesAdded.Add(file);
                    _dbContext.Files.Add(file);
                }

                foreach (IFormFile galleryImage in writeDTO.GalleryImages)
                {
                    FileSaveResult? galleryImageResult = await galleryImage.Save(_webHostEnvironment, _imageOption.Url);
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
                        newFilesAdded.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                _dbContext.SaveChanges();
            }
            catch(Exception exc)
            {
                _logger.LogError(exc, "Exception Occurred when saving the property related data: {message}", exc.Message);
                //Deleting the property we added and returning the error
                _dbContext.Properties.Remove(property);
                _dbContext.SaveChanges();

                //Deleting all of the uploaded files from the storage related to the current request
                foreach(File file in newFilesAdded)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, file.Filename);
                }

                return Response.Error($"Error saving the property: {exc.Message}");
            }

            _logger.LogInformation("Property Overview, Features ({featuresCount}), KeyHighlights ({keyHighlightsCount}) and Images ({galleryImagesCount}) has been uploaded for Property Id {propertyId} by Admin", features.Count, keyHighlights.Count, writeDTO.GalleryImages.Count, property.Id);

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
            if (propertyData == null)
            {
                return Response.Error("Invalid Project Data");
            }

            PropertyWriteDTO writeDTO = _mapper.Map<PropertyWriteDTO>(propertyData);

            ValidationResult validationResult = await _projectValidator.ValidateAsync(writeDTO);

            if(!validationResult.IsValid)
            {
                return Response.Error(validationResult.Errors);
            }

            Property property = _mapper.Map<Property>(writeDTO);
            property.ApprovalStatus = PropertyApprovalStatus.Approved;
            property.Submission = PropertySubmission.Primary;
            property.DateAdded = DateTime.Now;
            property.IsVerified = true;
            _dbContext.Properties.Add(property);
            try
            {
                _dbContext.SaveChanges();
            }
            catch(Exception exc)
            {
                _logger.LogError(exc, "Exception Occurred when saving a project: {message}", exc.Message);
                return Response.Error($"Error when saving the Project: {exc.Message}");
            }
            _logger.LogInformation("A Project has been Added by Admin With Id {propertyId} and developer {developerId}", property.Id, property.Developer);

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

            List<File> newAddedFiles = new List<File>();

            try
            {
                FileSaveResult? result = await writeDTO.CoverImage.Save(_webHostEnvironment, _imageOption.Url);
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
                    newAddedFiles.Add(file);
                    _dbContext.Files.Add(file);
                }

                if (writeDTO.Brochure != null)
                {
                    FileSaveResult? brochureResult = await writeDTO.Brochure.Save(_webHostEnvironment, _imageOption.Url);

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
                        newAddedFiles.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                if (writeDTO.FloorPlan != null)
                {
                    FileSaveResult? floorPlanResult = await writeDTO.FloorPlan.Save(_webHostEnvironment, _imageOption.Url);

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
                        newAddedFiles.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                foreach (IFormFile galleryImage in writeDTO.GalleryImages)
                {
                    FileSaveResult? galleryImageResult = await galleryImage.Save(_webHostEnvironment, _imageOption.Url);
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
                        newAddedFiles.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                _dbContext.SaveChanges();
            }
            catch (Exception exc)
            {
                _logger.LogError(exc, "Exception Occurred when saving the project related data: {message}", exc.Message);
                //Deleting the property we added and returning the error
                _dbContext.Properties.Remove(property);
                _dbContext.SaveChanges();

                //Deleting all of the uploaded files from the storage related to the current request
                foreach (File file in newAddedFiles)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, file.Filename);
                }

                return Response.Error($"Error saving the Project: {exc.Message}");
            }

            _logger.LogWarning("Property Overview, Developer ({developerId}), Features ({featuresCount}), KeyHighlights ({keyHighlightsCount}), Payment Plan Items ({paymentPlanItemsCount}), Property Item Details ({propertyDetailsCount}) and Images ({galleryImagesCount}) has been uploaded for Project Id {propertyId} by Admin", property.Developer, features.Count, keyHighlights.Count, paymentPlanItems.Count, propertyDetails.Count, writeDTO.GalleryImages.Count, property.Id);
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
            if (propertyData == null)
            {
                return Response.Error("Invalid Property Data");
            }

            //Getting the property
            Property? property = await _dbContext.Properties.Where(p => p.Id == id && !p.IsDeleted).FirstOrDefaultAsync();

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
                List<Feature> featuresToRemove = await _dbContext.Features.Where(f => updateDTO.FeaturesToRemove.Contains(f.Id) && f.PropertyId == property.Id).ToListAsync();
                _dbContext.Features.RemoveRange(featuresToRemove);
            }

            List<Feature> features = _mapper.Map<List<Feature>>(updateDTO.Features);
            _dbContext.Features.CreateOrUpdate(features, property.Id);

            //Deleting the specified key highlights
            if (updateDTO.KeyHighlightsToRemove.Count > 0)
            {
                List<KeyHighlight> keyHighlightsToRemove = await _dbContext.KeyHighlights.Where(key => updateDTO.KeyHighlightsToRemove.Contains(key.Id) && key.PropertyId == property.Id).ToListAsync();
                _dbContext.KeyHighlights.RemoveRange(keyHighlightsToRemove);
            }

            List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(updateDTO.KeyHighlights);
            _dbContext.KeyHighlights.CreateOrUpdate(keyHighlights, property.Id);

            List<File> newAddedFiles = new List<File>();
            List<string> filesToDelete = new List<string>();

            try
            {
                //If a new cover image is specified we need to delete the previous one
                if (updateDTO.CoverImage != null)
                {
                    //Finding the previous Cover Image
                    File? existingFile = await _dbContext.Files.Where(file => file.PropertyId == id && file.Purpose == FilePurpose.Cover).FirstOrDefaultAsync();

                    if (existingFile != null)
                    {
                        filesToDelete.Add(existingFile.Filename);
                        _dbContext.Files.Remove(existingFile);
                    }

                    FileSaveResult? result = await updateDTO.CoverImage.Save(_webHostEnvironment, _imageOption.Url);

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
                        newAddedFiles.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                foreach (IFormFile galleryImage in updateDTO.GalleryImages)
                {
                    FileSaveResult? galleryImageResult = await galleryImage.Save(_webHostEnvironment, _imageOption.Url);
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
                        newAddedFiles.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                _dbContext.SaveChanges();
            }
            catch(Exception exc)
            {
                _logger.LogError(exc, "Exception Occurred when updating the property: {message}", exc.Message);

                //Deleting all of the uploaded files from the storage related to the current request
                foreach (File file in newAddedFiles)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, file.Filename);
                }

                return Response.Error($"Error updating the property: {exc.Message}");
            } 

            // Deleting the files for which there is only 1 occurrence.
            // Reason for deleting now rather than before is to ensure that new files and data has been saved and only then remove the files
            // Otherwise these files would not be recoverable
            if(filesToDelete.Count > 0)
            {
                foreach(string file in filesToDelete)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, file);
                }
            }

            if (updateDTO.GalleryImagesToRemove.Count > 0)
            {
                List<File> galleryImagesToRemove = await _dbContext.Files.Where(file => updateDTO.GalleryImagesToRemove.Contains(file.Id) && file.Purpose == FilePurpose.Gallery && file.PropertyId == property.Id).ToListAsync();
                galleryImagesToRemove.ForEach(image =>
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, image.Filename);
                });
                _dbContext.Files.RemoveRange(galleryImagesToRemove);
                _dbContext.SaveChanges();
            }

            _logger.LogInformation("Property with id {propertyId} has been updated. Property Overview, Features ({featuresCount}), KeyHighlights ({keyHighlightsCount}) and Images ({galleryImagesCount}) has been uploaded for Property Id {propertyId} by Admin and Features ({featuresToRemoveCount}), KeyHighlights ({keyHighlightsToRemoveCount}) and Images ({galleryImagesToRemoveCount}) have been removed", property.Id, features.Count, keyHighlights.Count, updateDTO.GalleryImages.Count, property.Id, updateDTO.FeaturesToRemove.Count, updateDTO.KeyHighlightsToRemove.Count, updateDTO.GalleryImagesToRemove.Count);
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
            if (propertyData == null)
            {
                return Response.Error("Invalid Project Data");
            }

            //Getting the property
            Property? property = await _dbContext.Properties.Where(p => p.Id == id && !p.IsDeleted).FirstOrDefaultAsync();

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
                List<Feature> featuresToRemove = await _dbContext.Features.Where(f => updateDTO.FeaturesToRemove.Contains(f.Id) && f.PropertyId == property.Id).ToListAsync();
                _dbContext.Features.RemoveRange(featuresToRemove);
            }

            List<Feature> features = _mapper.Map<List<Feature>>(updateDTO.Features);
            _dbContext.Features.CreateOrUpdate(features, property.Id);

            //Deleting the specified key highlights
            if (updateDTO.KeyHighlightsToRemove.Count > 0)
            {
                List<KeyHighlight> keyHighlightsToRemove = await _dbContext.KeyHighlights.Where(key => updateDTO.KeyHighlightsToRemove.Contains(key.Id) && key.PropertyId == property.Id).ToListAsync();
                _dbContext.KeyHighlights.RemoveRange(keyHighlightsToRemove);
            }

            List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(updateDTO.KeyHighlights);
            _dbContext.KeyHighlights.CreateOrUpdate(keyHighlights, property.Id);

            //Deleting the specified payment plan items
            if (updateDTO.PaymentPlanItemsToRemove.Count > 0)
            {
                List<PaymentPlanItem> paymentPlanItemsToRemove = await _dbContext.PaymentPlanItems.Where(item => updateDTO.PaymentPlanItemsToRemove.Contains(item.Id) && item.PropertyId == property.Id).ToListAsync();
                _dbContext.PaymentPlanItems.RemoveRange(paymentPlanItemsToRemove);
            }

            List<PaymentPlanItem> paymentPlanItems = _mapper.Map<List<PaymentPlanItem>>(updateDTO.PaymentPlanItems);
            _dbContext.PaymentPlanItems.CreateOrUpdate(paymentPlanItems, property.Id);

            //Deleting the specified property details
            if (updateDTO.PropertyDetailsToRemove.Count > 0)
            {
                List<PropertyDetail> propertyDetailsToRemove = await _dbContext.PropertyDetails.Where(item => updateDTO.PropertyDetailsToRemove.Contains(item.Id) && item.PropertyId == property.Id).ToListAsync();
                _dbContext.PropertyDetails.RemoveRange(propertyDetailsToRemove);
            }

            List<PropertyDetail> propertyDetails = _mapper.Map<List<PropertyDetail>>(updateDTO.PropertyDetails);
            _dbContext.PropertyDetails.CreateOrUpdate(propertyDetails, property.Id);

            List<File> newAddedFiles = new List<File>();
            List<string> filesToDelete = new List<string>();

            try
            {
                //If a new cover image is specified we need to delete the previous one
                if (updateDTO.CoverImage != null)
                {
                    //Finding the previous Cover Image
                    File? existingFile = await _dbContext.Files.Where(file => file.PropertyId == id && file.Purpose == FilePurpose.Cover).FirstOrDefaultAsync();

                    if (existingFile != null)
                    {
                        filesToDelete.Add(existingFile.Filename);
                        _dbContext.Files.Remove(existingFile);
                    }

                    FileSaveResult? result = await updateDTO.CoverImage.Save(_webHostEnvironment, _imageOption.Url);

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
                        newAddedFiles.Add(file);
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
                        filesToDelete.Add(existingFile.Filename);
                        _dbContext.Files.Remove(existingFile);
                    }

                    FileSaveResult? result = await updateDTO.Brochure.Save(_webHostEnvironment, _imageOption.Url);

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
                        newAddedFiles.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                //If a new file is specified for the floor plan
                if (updateDTO.FloorPlan != null)
                {
                    //Finding the previous Cover Image
                    File? existingFile = await _dbContext.Files.Where(file => file.PropertyId == id && file.Purpose == FilePurpose.FloorPlan).FirstOrDefaultAsync();

                    if (existingFile != null)
                    {
                        filesToDelete.Add(existingFile.Filename);
                        _dbContext.Files.Remove(existingFile);
                    }

                    FileSaveResult? result = await updateDTO.FloorPlan.Save(_webHostEnvironment, _imageOption.Url);

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
                        newAddedFiles.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                foreach (IFormFile galleryImage in updateDTO.GalleryImages)
                {
                    FileSaveResult? result = await galleryImage.Save(_webHostEnvironment, _imageOption.Url);
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
                        newAddedFiles.Add(file);
                        _dbContext.Files.Add(file);
                    }
                }

                _dbContext.SaveChanges();
            }
            catch (Exception exc)
            {
                _logger.LogError(exc, "Exception Occurred when updating the project: {message}", exc.Message);

                //Deleting all of the uploaded files from the storage related to the current request
                foreach (File file in newAddedFiles)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, file.Filename);
                }

                return Response.Error($"Error updating the project: {exc.Message}");
            }

            // Deleting the files for which there is only 1 occurrence.
            // Reason for deleting now rather than before is to ensure that new files and data has been saved and only then remove the files
            // Otherwise these files would not be recoverable
            if (filesToDelete.Count > 0)
            {
                foreach (string file in filesToDelete)
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, file);
                }
            }

            if (updateDTO.GalleryImagesToRemove.Count > 0)
            {
                List<File> galleryImagesToRemove = await _dbContext.Files.Where(file => updateDTO.GalleryImagesToRemove.Contains(file.Id) && file.Purpose == FilePurpose.Gallery && file.PropertyId == property.Id).ToListAsync();
                galleryImagesToRemove.ForEach(image =>
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, image.Filename);
                });
                _dbContext.Files.RemoveRange(galleryImagesToRemove);
            }

            _dbContext.SaveChanges();   
            _logger.LogWarning("Project with id {propertyId} has been updated. Project Overview, Developer ({developerId}), Features ({featuresCount}), KeyHighlights ({keyHighlightsCount}), Payment Plan Items ({paymentPlanItemsCount}), Property Details ({propertyDetailsCount}) and Images ({galleryImagesCount}) has been uploaded for Project Id {propertyId} by Admin and Features ({featuresToRemoveCount}), KeyHighlights ({keyHighlightsToRemoveCount}), Payment Plan Items To Remove ({paymentPlanItemsToRemoveCount}), Property Details To Remove ({propertyDetailsToRemoveCount}) and Images ({galleryImagesToRemoveCount}) have been removed", property.Id, property.Developer, features.Count, keyHighlights.Count, paymentPlanItems.Count, propertyDetails.Count, updateDTO.GalleryImages.Count, property.Id, updateDTO.FeaturesToRemove.Count, updateDTO.KeyHighlightsToRemove.Count, updateDTO.PaymentPlanItemsToRemove.Count, updateDTO.PropertyDetails.Count, updateDTO.GalleryImagesToRemove.Count);
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
            Property? property = await _dbContext.Properties
                .Where(p => p.Id == id && !p.IsDeleted && p.IsVerified && p.ApprovalStatus == PropertyApprovalStatus.Approved).FirstOrDefaultAsync();

            if(property == null)
            {
                return Response.Error("Property not found", 404);
            }

            //Setting the delete value for the property. This will ensure that the property becomes invisible to the users but still exist in the database
            property.IsDeleted = true;
            _dbContext.Properties.Update(property);
            _dbContext.SaveChanges();
            return Response.Message($"{(property.Category == PropertyCategory.Project ? "Project" : "Property")} deleted successfully");
        }

        #endregion
    }
}
