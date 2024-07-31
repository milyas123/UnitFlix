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

        [HttpGet("locations")]
        public JsonResult Locations()
        {
            List<Location> locations = _dbContext.Locations.ToList();
            return new JsonResult(new { locations = locations });
        }

        #endregion
    }
}
