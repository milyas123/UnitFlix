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
                .EmailAddress()
                .When(t => !string.IsNullOrEmpty(t.Email))
                .WithMessage("Invalid Email Address. Email address must be of form abc@example.com");
        }

        #endregion
    }
}
