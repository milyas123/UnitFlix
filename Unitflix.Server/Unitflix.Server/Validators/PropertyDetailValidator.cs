using FluentValidation;

using Unitflix.Server.DTOs;

namespace Unitflix.Server.Validators
{
    public class PropertyDetailValidator : AbstractValidator<PropertyDetailsWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public PropertyDetailValidator()
        {
            RuleFor(detail => detail.UnitType)
                .NotEmpty()
                .WithMessage("Unit type is required for property detail");

            RuleFor(detail => detail.PropertyType)
                .NotEmpty()
                .WithMessage("Property type is required for property detail");

            RuleFor(detail => detail.Size)
                .NotEmpty()
                .WithMessage("Size is required for property detail");
        }

        #endregion
    }
}
