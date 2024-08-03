using FluentValidation;

using Unitflix.Server.DTOs;

namespace Unitflix.Server.Validators
{
    public class PaymentPlanItemValidator : AbstractValidator<PaymentPlanItemWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public PaymentPlanItemValidator()
        {
            RuleFor(item => item.Title)
                .NotEmpty()
                .WithMessage("Payment plan item title is required");

            RuleFor(item => item.Description)
                .NotEmpty()
                .WithMessage("Payment plan item description is required");

            RuleFor(item => item.Amount)
                .GreaterThan(0)
                .WithMessage("Payment plan item amount must be greater than or equal to 1");
        }

        #endregion
    }
}
