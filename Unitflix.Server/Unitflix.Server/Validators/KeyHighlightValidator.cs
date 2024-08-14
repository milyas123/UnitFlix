using FluentValidation;

using Unitflix.Server.DTOs;

namespace Unitflix.Server.Validators
{
    public class KeyHighlightValidator : AbstractValidator<KeyHighlightWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public KeyHighlightValidator()
        {
            RuleFor(keyHighlight => keyHighlight.Id)
                .GreaterThan(0)
                .When(keyHighlight => keyHighlight.Id.HasValue);

            RuleFor(keyHighlight => keyHighlight.Title)
                .NotEmpty()
                .WithMessage("Key highlight title is required");

            RuleFor(keyHighlight => keyHighlight.Description)
                .NotEmpty()
                .WithMessage("Key highlight description is required");
        }

        #endregion
    }
}
