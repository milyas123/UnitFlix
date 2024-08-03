using FluentValidation;

using Unitflix.Server.Helpers;

namespace Unitflix.Server.Validators
{
    public class FileValidator : AbstractValidator<IFormFile>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public FileValidator()
        {
            RuleFor(file => file)
                .NotNull()
                .WithMessage("File is required")
                .Custom((file, context) =>
                {
                    if (file.Size() > 10)
                    {
                        context.AddFailure($"{file.FileName} size must be less than 10 Mb");
                    }
                });
        }

        #endregion
    }
}
