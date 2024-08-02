using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using Unitflix.Server.Models;

using File = Unitflix.Server.Models.File;

namespace Unitflix.Server.Database
{
    public class ApplicationDbContext : IdentityDbContext<Admin, AdminRole, int>
    {

        #region DbSets

        public DbSet<Location> Locations { get; set; }

        public DbSet<PropertyType> PropertyTypes { get; set; }

        public DbSet<Developer> Developers { get; set; }

        public DbSet<Property> Properties { get; set; }

        public DbSet<Feature> Features { get; set; }

        public DbSet<PaymentPlanItem> PaymentPlanItems { get; set; }

        public DbSet<KeyHighlight> KeyHighlights { get; set; }

        public DbSet<Overview> Overviews { get; set; }

        public DbSet<PropertyDetail> PropertyDetails { get; set; }

        public DbSet<UserDetail> UserDetails { get; set; }

        public DbSet<EmailConfiguration> EmailConfigurations { get; set; }

        public DbSet<File> Files { get; set; }

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
