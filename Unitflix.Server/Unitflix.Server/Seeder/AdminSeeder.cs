
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

using Unitflix.Server.Database;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;
using Unitflix.Server.Options;

namespace Unitflix.Server.Seeder
{
    public class AdminSeeder : Seeder
    {
        #region Overriden Methods

        /// <summary>
        /// Seeds the data in the database
        /// </summary>
        /// <param name="provider"></param>
        public async void Seed(IServiceProvider provider)
        {
            using(AsyncServiceScope service = provider.CreateAsyncScope())
            {
                ApplicationDbContext dbContext = service.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                dbContext.Database.EnsureCreated();
                UserManager<User> userManager = service.ServiceProvider.GetRequiredService<UserManager<User>>();
                RoleManager<UserRole> roleManager = service.ServiceProvider.GetRequiredService<RoleManager<UserRole>>();
                IOptions<AdminOptions> adminOptions = service.ServiceProvider.GetRequiredService<IOptions<AdminOptions>>();
                ILogger<AdminSeeder> logger = service.ServiceProvider.GetRequiredService<ILogger<AdminSeeder>>();
                if(dbContext != null)
                {
                    if(dbContext.Roles.Count() == 0)
                    {
                        logger.LogInformation("Inserting Admin Role as none exists");
                        UserRole role = new UserRole()
                        {
                            Name = "Admin",
                            NormalizedName = "ADMIN"
                        };
                        await roleManager.CreateAsync(role);
                        logger.LogInformation("Admin Role Inserted Successfully");
                    }

                    if(dbContext.Users.Count() == 0)
                    {
                        logger.LogInformation("Inserting Default Admin Account");
                        User admin = new User()
                        {
                            Email = "admin@gmail.com",
                            UserName = adminOptions.Value.username
                        };
                        IdentityResult result = await userManager.CreateAsync(admin, adminOptions.Value.password);
                        if(result.Succeeded)
                        {
                            //Adding to the role
                            await userManager.AddToRoleAsync(admin, "Admin");

                            logger.LogInformation("Default Admin Account Create Successfully and Added to the Admin Role");
                        } else
                        {
                            logger.LogError("Error when adding the default admin account {errors}", result.Errors);
                        }
                    }
                }
            }
        }

        #endregion
    }
}
