
using Microsoft.Extensions.Logging;

using Unitflix.Server.Database;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;

namespace Unitflix.Server.Seeder
{
    public class DeveloperSeeder : Seeder
    {
        public void Seed(IServiceProvider provider)
        {
            using (var serviceProvider = provider.CreateAsyncScope())
            {
                ApplicationDbContext dbContext = serviceProvider.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                ILogger<DeveloperSeeder> logger = serviceProvider.ServiceProvider.GetRequiredService<ILogger<DeveloperSeeder>>();
                //If no developers exists then add default developers
                if (dbContext != null && dbContext.Developers.Count() == 0)
                {
                    List<Developer> developers = new List<Developer>
                    {
                        new Developer() { Name = "Emaar Properties" },
                        new Developer() { Name = "Tiger Properties" },
                        new Developer() { Name = "Aldar Properties" },
                        new Developer() { Name = "Al Habtoor Group" },
                        new Developer() { Name = "Omniyat" },
                        new Developer() { Name = "Meydan Group" },
                        new Developer() { Name = "Danube Properties" },
                        new Developer() { Name = "Ellington Properties" },
                        new Developer() { Name = "Deyaar" },
                        new Developer() { Name = "Sobha Realty" },
                        new Developer() { Name = "Meraas" },
                        new Developer() { Name = "Nakheel" },
                        new Developer() { Name = "Vincitore" },
                        new Developer() { Name = "Damac Properties" }
                    };
                    dbContext.Developers.AddRange(developers);
                    dbContext.SaveChanges();
                    logger.LogInformation("Default Developers have been inserted into the database");
                }
            }
        }
    }
}
