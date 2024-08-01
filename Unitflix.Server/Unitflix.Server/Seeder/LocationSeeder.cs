using Unitflix.Server.Database;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;

namespace Unitflix.Server.Seeder
{
    /// <summary>
    /// Inserts Default Locations in the Database if none exists
    /// </summary>
    public class LocationSeeder : Seeder
    {
        public void Seed(IServiceProvider provider)
        {
            using(var serviceProvider = provider.CreateAsyncScope())
            {
                ApplicationDbContext dbContext = serviceProvider.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                //If no locations exists then add locations
                if(dbContext != null && dbContext.Locations.Count() == 0)
                {
                    Logger.Log("Inserting Locations");
                    List<Location> dubaiLocations = new List<Location>
                    {
                        new Location() { Name = "Downtown Dubai" },
                        new Location() { Name = "Downtown Dubai" },
                        new Location() { Name = "Palm Jumeirah" },
                        new Location() { Name = "Dubai Marina" },
                        new Location() { Name = "Jumeirah Beach" },
                        new Location() { Name = "Jumeirah" },
                        new Location() { Name = "Downtown Dubai" },
                        new Location() { Name = "Dubai Creek" },
                        new Location() { Name = "Jumeirah" },
                        new Location() { Name = "Al Fahidi" },
                        new Location() { Name = "Palm Jumeirah" },
                        new Location() { Name = "Al Barsha" },
                        new Location() { Name = "Al Barsha" },
                        new Location() { Name = "Sheikh Mohammed Bin Zayed Road" },
                        new Location() { Name = "Zabeel Park" },
                        new Location() { Name = "Sheikh Mohammed Bin Zayed Road" },
                        new Location() { Name = "Palm Jumeirah" },
                        new Location() { Name = "Downtown Dubai" },
                        new Location() { Name = "Umm Suqeim" },
                        new Location() { Name = "Jumeirah Beach Residence" },
                        new Location() { Name = "Deira" },
                        new Location() { Name = "Deira" },
                        new Location() { Name = "Al Fahidi" },
                        new Location() { Name = "Downtown Dubai" },
                        new Location() { Name = "Jumeirah" }
                    };
                    dbContext.Locations.AddRange(dubaiLocations);
                    dbContext.SaveChanges();
                    Logger.Log("Locations Inserted Successfully", MessageType.Success);
                }
            }
        }
    }
}
