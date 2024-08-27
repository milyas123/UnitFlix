
using Unitflix.Server.Database;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;

namespace Unitflix.Server.Seeder
{
    public class PropertyTypeSeeder : Seeder
    {
        public void Seed(IServiceProvider provider)
        {
            using (var serviceProvider = provider.CreateAsyncScope())
            {
                ApplicationDbContext dbContext = serviceProvider.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                ILogger<PropertyTypeSeeder> logger = serviceProvider.ServiceProvider.GetRequiredService<ILogger<PropertyTypeSeeder>>();
                //If no property type exists then add default property types
                if (dbContext != null && dbContext.PropertyTypes.Count() == 0)
                {
                    List<PropertyType> propertyTypes = new List<PropertyType>
                    {
                        new PropertyType() { Name = "Flat" },
                        new PropertyType() { Name = "House" },
                        new PropertyType() { Name = "Villa" },
                    };
                    dbContext.PropertyTypes.AddRange(propertyTypes);
                    dbContext.SaveChanges();
                    logger.LogInformation("Default Property Types have been inserted into the database");
                }
            }
        }
    }
}
