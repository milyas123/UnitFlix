using FluentValidation;

using Unitflix.Server.DTOs;

namespace Unitflix.Server.Validators
{
    public class FeatureValidator : AbstractValidator<FeatureWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public FeatureValidator()
        {
            RuleFor(feature => feature.Icon)
                .NotEmpty()
                .WithMessage("Feature icon is required");

            RuleFor(feature => feature.Name)
                .NotEmpty()
                .WithMessage("Feature name is required");
        }

        #endregion
    }
}
