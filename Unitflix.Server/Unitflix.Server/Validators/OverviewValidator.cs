using FluentValidation;

using Unitflix.Server.DTOs;

namespace Unitflix.Server.Validators
{
    public class OverviewValidator : AbstractValidator<OverviewWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public OverviewValidator()
        {
            RuleFor(overview => overview.Text)
                .NotEmpty()
                .WithMessage("Overview text is required");
        }

        #endregion
    }
}
