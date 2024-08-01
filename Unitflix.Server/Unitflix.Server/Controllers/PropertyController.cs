using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Unitflix.Server.Database;
using Unitflix.Server.Models;

namespace Unitflix.Server.Controllers
{
    [Route("property")]
    public class PropertyController : Controller
    {

        #region Private Members

        private ApplicationDbContext _dbContext;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public PropertyController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
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
            List<Property> properties = _dbContext.Properties.ToList();
            return Json(new { properties }); 
        }

        #endregion
    }
}
