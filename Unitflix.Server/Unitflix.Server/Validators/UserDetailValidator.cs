using FluentValidation;

using Unitflix.Server.DTOs;
using Unitflix.Server.Models;

namespace Unitflix.Server.Validators
{
    public class UserDetailValidator : AbstractValidator<UserDetailWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public UserDetailValidator()
        {
            RuleFor(userDetail => userDetail.Email)
                .NotEmpty()
                .WithMessage("Email is required")
                .Matches(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$")
                .WithMessage("Invalid email. Please make sure your email follows the following format abc@exmaple.com");

            RuleFor(userDetail => userDetail.Name)
                .NotEmpty()
                .WithMessage("Name is required");

            RuleFor(userDetail => userDetail.PhoneNumber)
                .NotEmpty()
                .WithMessage("Phone Number is required");
        }

        #endregion
    }
}
