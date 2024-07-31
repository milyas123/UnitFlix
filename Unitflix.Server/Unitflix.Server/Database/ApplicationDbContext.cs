using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using Unitflix.Server.Models;

namespace Unitflix.Server.Database
{
    public class ApplicationDbContext : IdentityDbContext<Admin, AdminRole, int>
    {

        #region DbSets

        public DbSet<Location> Locations { get; set; }

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            
        }

        #endregion
    }
}
