
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
                        new Developer() { Name = "Alice" },
                        new Developer() { Name = "Bob" },
                        new Developer() { Name = "Charlie" },
                        new Developer() { Name = "Diana" },
                        new Developer() { Name = "Eve" },
                        new Developer() { Name = "Frank" },
                        new Developer() { Name = "Grace" },
                        new Developer() { Name = "Hank" },
                        new Developer() { Name = "Ivy" },
                        new Developer() { Name = "Jack" }
                    };
                    dbContext.Developers.AddRange(developers);
                    dbContext.SaveChanges();
                    logger.LogInformation("Default Developers have been inserted into the database");
                }
            }
        }
    }
}
