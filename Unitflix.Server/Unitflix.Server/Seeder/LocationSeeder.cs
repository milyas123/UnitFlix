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
                ILogger<LocationSeeder> logger = serviceProvider.ServiceProvider.GetRequiredService<ILogger<LocationSeeder>>();
                //If no locations exists then add locations
                if(dbContext != null && dbContext.Locations.Count() == 0)
                {
                    List<Location> dubaiLocations = new List<Location>
                    {
                        new Location() { Name = "Downtown, Dubai" },
                        new Location() { Name = "Business Bay, Dubai" },
                        new Location() { Name = "Dubai Marina, Dubai" },
                        new Location() { Name = "Jumeirah Beach Residence (JBR), Dubai" },
                        new Location() { Name = "Jumeirah Lakes Towers (JLT), Dubai" },
                        new Location() { Name = "Palm Jumeirah, Dubai" },
                        new Location() { Name = "Jumeirah, Dubai" },
                        new Location() { Name = "Arabian Ranches, Dubai" },
                        new Location() { Name = "Dubai Hills Estate, Dubai" },
                        new Location() { Name = "Al Barsha, Dubai" },
                        new Location() { Name = "Dubai Silicon Oasis, Dubai" },
                        new Location() { Name = "Motor City, Dubai" },
                        new Location() { Name = "Discovery Gardens, Dubai" },
                        new Location() { Name = "Greens and Views, Dubai" },
                        new Location() { Name = "City Walk, Dubai" },
                        new Location() { Name = "Mirdif, Dubai" },
                        new Location() { Name = "Deira, Dubai" },
                        new Location() { Name = "Bur Dubai, Dubai" },
                        new Location() { Name = "Al Quoz, Dubai" },
                        new Location() { Name = "Jumeirah Village Circle (JVC), Dubai" },
                        new Location() { Name = "Jumeirah Village Triangle (JVT), Dubai" },
                        new Location() { Name = "Dubailand, Dubai" },
                        new Location() { Name = "Al Furjan, Dubai" },
                        new Location() { Name = "Emirates Hills, Dubai" },
                        new Location() { Name = "Umm Suqeim, Dubai" },
                        new Location() { Name = "Meydan, Dubai" },
                        new Location() { Name = "Al Warsan, Dubai" },
                        new Location() { Name = "International City, Dubai" },
                        new Location() { Name = "Bluewaters Island, Dubai" },
                        new Location() { Name = "Al Khail Heights, Dubai" },
                        new Location() { Name = "Saadiyat Island, Abu Dhabi" },
                        new Location() { Name = "Al Reem Island, Abu Dhabi" },
                        new Location() { Name = "Yas Island, Abu Dhabi" },
                        new Location() { Name = "Al Raha Beach, Abu Dhabi" },
                        new Location() { Name = "Khalifa City, Abu Dhabi" },
                        new Location() { Name = "Mohamed Bin Zayed City, Abu Dhabi" },
                        new Location() { Name = "Al Ghadeer, Abu Dhabi" },
                        new Location() { Name = "Mussafah, Abu Dhabi" },
                        new Location() { Name = "Al Bateen, Abu Dhabi" },
                        new Location() { Name = "Al Khalidiyah, Abu Dhabi" },
                        new Location() { Name = "Corniche Area, Abu Dhabi" },
                        new Location() { Name = "Al Mushrif, Abu Dhabi" },
                        new Location() { Name = "Al Muroor, Abu Dhabi" },
                        new Location() { Name = "Shakhbout City, Abu Dhabi" },
                        new Location() { Name = "Al Shamkha, Abu Dhabi" },
                        new Location() { Name = "Masdar City, Abu Dhabi" },
                        new Location() { Name = "Al Majaz, Sharjah" },
                        new Location() { Name = "Al Taawun, Sharjah" },
                        new Location() { Name = "Al Khan, Sharjah" },
                        new Location() { Name = "Al Qasba, Sharjah" },
                        new Location() { Name = "Al Nahda, Sharjah" },
                        new Location() { Name = "Al Nad, Sharjah" },
                        new Location() { Name = "Muwailih Commercial, Sharjah" },
                        new Location() { Name = "Tilal City, Sharjah" },
                        new Location() { Name = "Sharjah Waterfront City, Sharjah" },
                        new Location() { Name = "Al Zahia, Sharjah" },
                        new Location() { Name = "University City, Sharjah" },
                        new Location() { Name = "Al Hamra Village, Ras Al Khaimah" },
                        new Location() { Name = "Mina Al Arab, Ras Al Khaimah" },
                        new Location() { Name = "Marjan Island, Ras Al Khaimah" },
                        new Location() { Name = "Julphar Towers, Ras Al Khaimah" },
                        new Location() { Name = "Khuzam, Ras Al Khaimah" },
                        new Location() { Name = "Al Nakheel, Ras Al Khaimah" },
                        new Location() { Name = "Al Rams, Ras Al Khaimah" },
                        new Location() { Name = "Al Dhait, Ras Al Khaimah" },
                        new Location() { Name = "Seih Al Uraibi, Ras Al Khaimah" },
                        new Location() { Name = "Al Jazeera Al Hamra, Ras Al Khaimah" },
                        new Location() { Name = "Al Qusaidat, Ras Al Khaimah" },
                        new Location() { Name = "RAK City Center, Ras Al Khaimah" },
                        new Location() { Name = "Al Mamourah, Ras Al Khaimah" },
                        new Location() { Name = "Dafan Al Nakheel, Ras Al Khaimah" },
                        new Location() { Name = "Al Refaa, Ras Al Khaimah" },
                        new Location() { Name = "Ajman Corniche, Ajman" },
                        new Location() { Name = "Al Nuaimiya, Ajman" },
                        new Location() { Name = "Al Rashidiya, Ajman" },
                        new Location() { Name = "Al Jurf, Ajman" },
                        new Location() { Name = "Ajman Uptown, Ajman" },
                        new Location() { Name = "Fujairah City, Fujairah" },
                        new Location() { Name = "Dibba Fujairah, Fujairah" },
                        new Location() { Name = "Al Aqah, Fujairah" },
                        new Location() { Name = "Masafi, Fujairah" },
                        new Location() { Name = "Al Salama, Umm Al Quwain" },
                        new Location() { Name = "Al Raas, Umm Al Quwain" },
                        new Location() { Name = "Al Haditha, Umm Al Quwain" },
                        new Location() { Name = "Al Maqta, Umm Al Quwain" }
                    };
                    dbContext.Locations.AddRange(dubaiLocations);
                    dbContext.SaveChanges();
                    logger.LogInformation("Default Locations have been inserted into the Database");
                }
            }
        }
    }
}
