using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Unitflix.Server.DTOs;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;
using Unitflix.Server.Options;

namespace Unitflix.Server.Controllers
{
    [Route("admin")]
    public class AdminController : Controller
    {
        #region Private Members

        private UserManager<User> _userManager { get; set; }

        private JWTOptions _jwtOptions { get; set; }

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public AdminController(UserManager<User> userManager, IOptions<JWTOptions> jwtOptions)
        {
            _userManager = userManager;
            _jwtOptions = jwtOptions.Value;
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

            return Response.Message(new {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }

        #endregion
    }
}
