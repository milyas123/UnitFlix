using AutoMapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;
using Unitflix.Server.Results;

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

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public PropertyController(ApplicationDbContext dbContext,
            IMapper mapper,
            IWebHostEnvironment webHostEnvironment)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _webHostEnvironment = webHostEnvironment;
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
            List<Property> properties = _dbContext.Properties
                .Include(property => property.Overview)
                .Include(property => property.Files)
                .Include(property => property.Features)
                .Include(property => property.KeyHighlights)
                .Include(property => property.PaymentPlanItems)
                .ToList();
            return Json(new { properties }); 
        }

        /// <summary>
        /// Creates a Primary Property submitted by an admin
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<JsonResult> CreatePrimaryProperty([FromForm]PropertyAPIDTO propertyData)
        {
            PropertyWriteDTO writeDTO = _mapper.Map<PropertyWriteDTO>(propertyData);

            //If this is a property
            if (writeDTO.Category == PropertyCategory.Property)
            {
                /* Ensure that the property has the follows
                 * Title
                 * Location
                 * Beds
                 * Bath
                 * Area
                 * Price
                 * Property Type
                 * Features
                 * Key Highlights
                 * Overview
                 * Gallery Images
                 * Cover Image
                 */

                if (string.IsNullOrEmpty(writeDTO.Title))
                {
                    return Response.Error("Invalid Property Title");
                }
                else if (writeDTO.location <= 0 && !_dbContext.Locations.Any(location => location.Id == writeDTO.location))
                {
                    return Response.Error("Invalid Location");
                }
                else if (writeDTO.Beds <= 0)
                {
                    return Response.Error("Number of Beds must be greather than or equal to 1");
                }
                else if (writeDTO.Baths <= 0)
                {
                    return Response.Error("Number of Baths must be greather than or equal to 1");
                }
                else if (writeDTO.Area <= 0)
                {
                    return Response.Error("Area of a property must be greater than 0");
                }
                else if (writeDTO.Price <= 0)
                {
                    return Response.Error("Price of a property must be greater than 0");
                }
                else if (writeDTO.PropertyType <= 0 || !_dbContext.PropertyTypes.Any(propertyType => propertyType.Id == writeDTO.PropertyType))
                {
                    return Response.Error("Invalid Property Type Specified");
                }
                else if (writeDTO.Features == null || writeDTO.Features.Count == 0)
                {
                    return Response.Error("A Property must have atleast 1 feature");
                }
                else if (writeDTO.KeyHighlights == null || writeDTO.KeyHighlights.Count == 0)
                {
                    return Response.Error("A Property must have atleast 1 key highlight");
                }
                else if (writeDTO.Overview == null || string.IsNullOrEmpty(writeDTO.Overview.Text))
                {
                    return Response.Error("Property must have an overview");
                }
                else if (writeDTO.GalleryImages.Count == 0)
                {
                    return Response.Error("Property must have atleast 1 gallery image");
                }
                else if (writeDTO.GalleryImages.Any(image => image.Size() > 10))
                {
                    return Response.Error("All of the gallery images must be less than 10 Mb");
                }
                else if (writeDTO.CoverImage == null)
                {
                    return Response.Error("Property must have a cover image");
                }
                else if (writeDTO.CoverImage.Size() > 10)
                {
                    return Response.Error("Cover Image Must be less than 10 Mb in size");
                }

                Property property = _mapper.Map<Property>(writeDTO);
                property.Developer = null;
                property.Status = PropertyStatus.Approved;
                property.Submission = PropertySubmission.Primary;
                property.DateAdded = DateTime.Now;
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

                FileSaveResult? result = await writeDTO.CoverImage.Save(_webHostEnvironment, Request.Host.ToString());

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
                    FileSaveResult? result = await galleryImage.Save(_webHostEnvironment, Request.Host.ToString());
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
                return Response.Message("Property Added Successfully");
            }
            else
            {
                /* Ensure that the Project has the follows
                 * Title
                 * Location
                 * Price
                 * Property Type
                 * Developer
                 * DownPayment
                 * PaymentPlan
                 * HandOver
                 * Featured
                 * Features
                 * Key Highlights
                 * Payment Plan Items
                 * Overview
                 * Property Details
                 * Gallery Images
                 * Cover Image
                 */

                if (string.IsNullOrEmpty(writeDTO.Title))
                {
                    return Response.Error("Invalid Property Title");
                }
                else if (writeDTO.location <= 0 && !_dbContext.Locations.Any(location => location.Id == writeDTO.location))
                {
                    return Response.Error("Invalid Location");
                }
                else if (writeDTO.Developer == null || writeDTO.Developer <= 0)
                {
                    return Response.Error("Developer Id must be greater than zero");
                }
                else if (writeDTO.DownPayment == null || writeDTO.DownPayment <= 0)
                {
                    return Response.Error("Down payment must be greater than 0");
                }
                else if (string.IsNullOrEmpty(writeDTO.PaymentPlan))
                {
                    return Response.Error("Payment Plan is required");
                }
                else if (string.IsNullOrEmpty(writeDTO.HandOver))
                {
                    return Response.Error("Hand Over is required");
                }
                else if (writeDTO.Price <= 0)
                {
                    return Response.Error("Price of a Project must be greater than 0");
                }
                else if (writeDTO.PropertyType <= 0 || !_dbContext.PropertyTypes.Any(propertyType => propertyType.Id == writeDTO.PropertyType))
                {
                    return Response.Error("Invalid Property Type Specified");
                }
                else if (writeDTO.Features == null || writeDTO.Features.Count == 0)
                {
                    return Response.Error("A Project must have atleast 1 feature");
                }
                else if (writeDTO.PaymentPlanItems == null || writeDTO.PaymentPlanItems.Count == 0)
                {
                    return Response.Error("A Project must have atleast 1 payment plan item");
                }
                else if (writeDTO.KeyHighlights == null || writeDTO.KeyHighlights.Count == 0)
                {
                    return Response.Error("A Project must have atleast 1 key highlight");
                }
                else if (writeDTO.Overview == null || string.IsNullOrEmpty(writeDTO.Overview.Text))
                {
                    return Response.Error("Project must have an overview");
                }
                else if (writeDTO.GalleryImages.Count == 0)
                {
                    return Response.Error("Project must have atleast 1 gallery image");
                }
                else if (writeDTO.GalleryImages.Any(image => image.Size() > 10))
                {
                    return Response.Error("All of the gallery images must be less than 10 Mb");
                }
                else if (writeDTO.CoverImage == null)
                {
                    return Response.Error("Project must have a cover image");
                }
                else if (writeDTO.CoverImage.Size() > 10)
                {
                    return Response.Error("Cover Image Must be less than 10 Mb in size");
                }

                Property property = _mapper.Map<Property>(writeDTO);
                property.Status = PropertyStatus.Approved;
                property.Submission = PropertySubmission.Primary;
                property.DateAdded = DateTime.Now;
                _dbContext.Properties.Add(property);
                _dbContext.SaveChanges();

                Overview overview = _mapper.Map<Overview>(writeDTO.Overview);
                overview.PropertyId = property.Id;
                _dbContext.Overviews.Add(overview);

                List<Feature> features = _mapper.Map<List<Feature>>(writeDTO.Features);
                features.ForEach(feature => feature.PropertyId = property.Id);
                _dbContext.Features.AddRange(features);

                List<PaymentPlanItem> paymentPlanItems = _mapper.Map<List<PaymentPlanItem>>(writeDTO.PaymentPlanItems);
                paymentPlanItems.ForEach(paymentPlan => paymentPlan.PropertyId = property.Id);
                _dbContext.PaymentPlanItems.AddRange(paymentPlanItems);

                List<KeyHighlight> keyHighlights = _mapper.Map<List<KeyHighlight>>(writeDTO.KeyHighlights);
                keyHighlights.ForEach(keyHighlight => keyHighlight.PropertyId = property.Id);
                _dbContext.KeyHighlights.AddRange(keyHighlights);

                FileSaveResult? result = await writeDTO.CoverImage.Save(_webHostEnvironment, Request.Host.ToString());

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
                    FileSaveResult? result = await galleryImage.Save(_webHostEnvironment, Request.Host.ToString());
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
                return Response.Message("Project Added Successfully");
            }
        }

        #endregion
    }
}
