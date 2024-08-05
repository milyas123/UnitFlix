﻿
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
                if(dbContext != null)
                {
                    if(dbContext.Roles.Count() == 0)
                    {
                        Logger.Log("Inserting Role");
                        UserRole role = new UserRole()
                        {
                            Name = "Admin",
                            NormalizedName = "ADMIN"
                        };
                        await roleManager.CreateAsync(role);
                        Logger.Log("Role Inserted Successfully", MessageType.Success);
                    }

                    if(dbContext.Users.Count() == 0)
                    {
                        Logger.Log("Inserting Default Admin Account");
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

                            Logger.Log("User Inserted Successfully", MessageType.Success);
                        } else
                        {
                            Logger.Log("Error in inserting User", MessageType.Error);
                            foreach (IdentityError error in result.Errors)
                            {
                                Logger.Log(error.Description, MessageType.Error);
                            }
                        }
                    }
                }
            }
        }

        #endregion
    }
}
