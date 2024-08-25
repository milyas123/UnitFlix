using FluentValidation;

using Unitflix.Server.DTOs;
using Unitflix.Server.Models;

namespace Unitflix.Server.Validators
{
    public class EmailConfigurationAddValidator : AbstractValidator<EmailConfigurationWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public EmailConfigurationAddValidator()
        {
            RuleFor(conf => conf.Email)
                .NotEmpty()
                .WithMessage("Email is required")
                .EmailAddress()
                .WithMessage("Invalid Email Address. Email address must be of form abc@example.com");

            RuleFor(conf => conf.Password)
                .NotEmpty()
                .WithMessage("Password is required");

            RuleFor(conf => conf.Host)
                .NotEmpty()
                .WithMessage("Host is required");

            RuleFor(conf => conf.Port)
                .Must(port => port > 0)
                .WithMessage("Email Server Port must be greater than 0");
        }

        #endregion
    }
}
