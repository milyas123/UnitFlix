using AutoMapper;

using Microsoft.AspNetCore.Mvc;

using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;

namespace Unitflix.Server.Controllers
{
    [Route("data")]
    public class DataController : Controller
    {
        #region Private Members

        private ApplicationDbContext _dbContext;

        private IMapper _mapper;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public DataController(ApplicationDbContext dbContext,
            IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        #endregion

        #region Routes

        /// <summary>
        /// Gets list of locations from the database
        /// </summary>
        /// <returns></returns>
        [HttpGet("locations")]
        public JsonResult GetLocations()
        {
            List<Location> locations = _dbContext.Locations.ToList();
            return Response.Message(locations);
        }

        /// <summary>
        /// Gets list of developers from the database
        /// </summary>
        /// <returns></returns>
        [HttpGet("developers")]
        public JsonResult GetDevelopers()
        {
            List<Developer> developers = _dbContext.Developers.ToList();
            List<DeveloperReadDTO> developerDTOs = _mapper.Map<List<DeveloperReadDTO>>(developers);

            //Finding Properties count for each developer
            foreach(DeveloperReadDTO dev in developerDTOs)
            {
                dev.PropertyCount = _dbContext
                    .Properties
                    .Where(p => p.Developer.HasValue && p.Developer.Value == dev.Id)
                    .Count();
            }

            developerDTOs = developerDTOs.OrderByDescending(dev => dev.PropertyCount).ToList();

            return Response.Message(developerDTOs);
        }

        /// <summary>
        /// Gets list of property types from the database
        /// </summary>
        /// <returns></returns>
        [HttpGet("property_types")]
        public JsonResult GetPropertyTypes()
        {
            List<PropertyType> propertyTypes = _dbContext.PropertyTypes.ToList();
            return Response.Message(propertyTypes);
        }

        /// <summary>
        /// Gets a list of property statuses from the database
        /// </summary>
        /// <returns></returns>
        [HttpGet("property_statuses")]
        public JsonResult GetPropertyStatuses()
        {
            List<PropertyStatus> propertyStatuses = _dbContext.PropertyStatuses.ToList();
            return Response.Message(_mapper.Map<List<PropertyStatusReadDTO>>(propertyStatuses));
        }

        #endregion
    }
}
