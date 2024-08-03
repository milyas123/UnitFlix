using Microsoft.AspNetCore.Mvc;

using Unitflix.Server.Database;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;

namespace Unitflix.Server.Controllers
{
    [Route("data")]
    public class DataController : Controller
    {
        #region Private Members

        private ApplicationDbContext _dbContext;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public DataController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
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
            return Response.Message(developers);
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

        #endregion
    }
}
