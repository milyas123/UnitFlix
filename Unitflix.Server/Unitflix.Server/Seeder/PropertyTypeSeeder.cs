
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
                //If no property type exists then add default property types
                if (dbContext != null && dbContext.PropertyTypes.Count() == 0)
                {
                    Logger.Log("Inserting Property Types");
                    List<PropertyType> propertyTypes = new List<PropertyType>
                    {
                        new PropertyType() { Name = "Flat" },
                        new PropertyType() { Name = "House" },
                        new PropertyType() { Name = "Villa" },
                    };
                    dbContext.PropertyTypes.AddRange(propertyTypes);
                    dbContext.SaveChanges();
                    Logger.Log("Property Types Inserted Successfully", MessageType.Success);
                }
            }
        }
    }
}
