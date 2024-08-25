using FluentValidation;

using Unitflix.Server.DTOs;

namespace Unitflix.Server.Validators
{
    public class EmailConfigurationUpdateValidator : AbstractValidator<EmailConfigurationWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public EmailConfigurationUpdateValidator()
        {
            RuleFor(conf => conf.Email)
                .EmailAddress()
                .When(conf => !string.IsNullOrEmpty(conf.Email))
                .WithMessage("Invalid Email Address. Email address must be of form abc@example.com");
        }

        #endregion
    }
}
