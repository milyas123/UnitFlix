
using Unitflix.Server.Database;
using PropertyCategory = Unitflix.Server.Enums.PropertyCategory;
using Unitflix.Server.Models;

namespace Unitflix.Server.Seeder
{
    public class PropertyStatusSeeder : Seeder
    {
        public void Seed(IServiceProvider provider)
        {
            using (var serviceProvider = provider.CreateAsyncScope())
            {
                ApplicationDbContext dbContext = serviceProvider.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                ILogger<PropertyStatusSeeder> logger = serviceProvider.ServiceProvider.GetRequiredService<ILogger<PropertyStatusSeeder>>();
                //If no property type exists then add default property types
                if (dbContext != null && dbContext.PropertyStatuses.Count() == 0)
                {
                    List<PropertyStatus> propertyStatuses = new List<PropertyStatus>
                    {
                        new PropertyStatus() { Name = "Ready To Move", Category = PropertyCategory.Project.ToString(), Color = "#03ac13" },
                        new PropertyStatus() { Name = "Pre Launch", Category = PropertyCategory.Project.ToString(), Color = "#EB6753" },
                        new PropertyStatus() { Name = "Launched", Category = PropertyCategory.Project.ToString(), Color = "#0892d0" },
                        new PropertyStatus() { Name = "Ready To Move In", Category = PropertyCategory.Property.ToString(), Color = "#03ac13" },
                        new PropertyStatus() { Name = "Secondary", Category = PropertyCategory.Property.ToString(), Color = "#23262E" },
                    };
                    dbContext.PropertyStatuses.AddRange(propertyStatuses);
                    dbContext.SaveChanges();
                    logger.LogInformation("Default Property Statuses have been inserted into the database");
                }
            }
        }
    }
}
