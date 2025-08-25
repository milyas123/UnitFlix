using AutoMapper;

using FluentValidation;
using FluentValidation.Results;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;
using Unitflix.Server.Options;
using Unitflix.Server.Validators;

namespace Unitflix.Server.Controllers
{
    [Route("admin")]
    public class AdminController : Controller
    {
        #region Private Members

        private UserManager<User> _userManager;

        private JWTOptions _jwtOptions;

        private IMapper _mapper;

        private EmailConfigurationAddValidator _emailConfigurationValidator;

        private EmailConfigurationUpdateValidator _emailConfigurationUpdateValidator;

        private ApplicationDbContext _dbContext;

        private ILogger<AdminController> _logger;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public AdminController(UserManager<User> userManager, 
            IOptions<JWTOptions> jwtOptions,
            IMapper mapper,
            EmailConfigurationAddValidator emailConfigurationValidator,
            ApplicationDbContext dbContext,
            EmailConfigurationUpdateValidator emailConfigurationUpdateValidator,
            ILogger<AdminController> logger)
        {
            _userManager = userManager;
            _jwtOptions = jwtOptions.Value;
            _mapper = mapper;
            _emailConfigurationValidator = emailConfigurationValidator;
            _dbContext = dbContext;
            _emailConfigurationUpdateValidator = emailConfigurationUpdateValidator;
            _logger = logger;
        }

        #endregion

        #region Routes

        /// <summary>
        /// Logs an admin in
        /// </summary>
        /// <returns></returns>
        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody]LoginDTO data)
        {
            if(data == null)
            {
                return Response.Error("Invalid Login Data");
            }

            if(string.IsNullOrEmpty(data.Username))
            {
                return Response.Error("Invalid Username");
            } 
            else if (string.IsNullOrEmpty(data.Password))
            {
                return Response.Error("Invalid Password");
            }


            //Finding an admin by username
            User? admin = await _userManager.FindByNameAsync(data.Username);

            if(admin == null)
            {
                return Response.Error("Invalid Credentials", 401);
            }
            else if (!await _userManager.IsInRoleAsync(admin, "Admin"))
            {
                return Response.Error("Login from your authorized terminal", 401);
            }

            bool isPasswordMatch = await _userManager.CheckPasswordAsync(admin, data.Password);

            if(!isPasswordMatch)
            {
                return Response.Error("Invalid Credentials", 401);
            }

            List<Claim> authClaims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, admin.UserName),
                new Claim(ClaimTypes.NameIdentifier, admin.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role, "Admin")
            };

            //Generating a key
            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtOptions.Secret));
            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _jwtOptions.ValidIssuer,
                audience: _jwtOptions.ValidAudience,
                expires: DateTime.Now.AddDays(2),
                claims: authClaims,
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );
            _logger.LogInformation("Admin Logged In");
            return Response.Message(new {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }

        /// <summary>
        /// Creates or updates an already existing email configuration
        /// </summary>
        /// <param name="writeDTO"></param>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpPost("email-configuration")]
        public async Task<ActionResult> CreateOrUpdateEmailConfiguration([FromBody]EmailConfigurationWriteDTO writeDTO)
        {
            if(writeDTO == null)
            {
                return Response.Error("Invalid Email Configuration Data");
            }

            EmailConfiguration configuration = _mapper.Map<EmailConfiguration>(writeDTO);
            //Getting an existing configuration
            EmailConfiguration? existingConfiguration = await _dbContext.EmailConfigurations.FirstOrDefaultAsync();

            //If an existing config exists then update it
            if(existingConfiguration != null)
            {

                ValidationResult result = _emailConfigurationUpdateValidator.Validate(writeDTO);

                if(!result.IsValid)
                {
                    return Response.Error(result.Errors);
                }

                if(!string.IsNullOrEmpty(configuration.Email))
                {
                    existingConfiguration.Email = configuration.Email;
                }

                if(!string.IsNullOrEmpty(configuration.Password))
                {
                    existingConfiguration.Password = configuration.Password;
                }

                if(!string.IsNullOrEmpty(configuration.Host))
                {
                    existingConfiguration.Host = configuration.Host;
                }

                if (configuration.Port > 0)
                {
                    existingConfiguration.Port = configuration.Port;
                }

                _dbContext.EmailConfigurations.Update(existingConfiguration);
                await _dbContext.SaveChangesAsync();
                _logger.LogInformation("Admin Configuration has been updated to Email: {email}, Host: {host}, Port: {port}", existingConfiguration.Email, existingConfiguration.Host, existingConfiguration.Port);
                EmailConfigurationReadDTO readDTO = _mapper.Map<EmailConfigurationReadDTO>(existingConfiguration);
                return Response.Message("Email Configuration Updated Successfully", new { configuration = readDTO });
            }
            else
            {
                ValidationResult result = _emailConfigurationValidator.Validate(writeDTO);

                if(!result.IsValid)
                {
                    return Response.Error(result.Errors);
                }

                _dbContext.EmailConfigurations.Add(configuration);
                await _dbContext.SaveChangesAsync();
                _logger.LogInformation("Admin Configuration has been created with information Email: {email}, Host: {host}, Port: {port}", configuration.Email, configuration.Host, configuration.Port);
                EmailConfigurationReadDTO readDTO = _mapper.Map<EmailConfigurationReadDTO>(configuration);
                return Response.Message("Email Configuration Added Successfully", new { configuration = readDTO });
            }
        }

        /// <summary>
        /// Returns the email configuration
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpGet("email-configuration")]
        public async Task<ActionResult> GetEmailConfiguration()
        {
            EmailConfiguration? configuration = await _dbContext.EmailConfigurations.FirstOrDefaultAsync();
            if (configuration == null)
            {
                return Response.Error("No Email Configuration Found", 404);
            }
            EmailConfigurationReadDTO readDTO = _mapper.Map<EmailConfigurationReadDTO>(configuration);
            return Response.Message(new { configuration = readDTO });
        }

        /// <summary>
        /// Changes the admin password
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "Admin")]
        [HttpPost("password/change")]
        public async Task<ActionResult> UpdatePassword([FromBody]PasswordChangeDTO dto)
        {
            if(dto == null || string.IsNullOrEmpty(dto.Password) || string.IsNullOrEmpty(dto.CurrentPassword))
            {
                return Response.Error("Invalid Data");
            }

            //Finding the admin user
            User? user = await _dbContext
                .Users
                .Where(user => user.Email == "admin@gmail.com")
                .FirstOrDefaultAsync();

            if(user == null)
            {
                return Response.Error("No user exists");
            }

            IdentityResult result = await _userManager.ChangePasswordAsync(user, dto.CurrentPassword, dto.Password);

            if(result.Succeeded)
            {
                return Response.Message("Password Changed Successfully");
            }
            else
            {
                return Response.Error(result.Errors.Select(error => error.Description).ToList());
            }
        }

        #endregion
    }
}
