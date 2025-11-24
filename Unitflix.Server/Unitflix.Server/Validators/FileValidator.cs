using FluentValidation;

using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;

namespace Unitflix.Server.Validators
{
    public class FileValidator : AbstractValidator<IFormFile>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public FileValidator(FileType fileType = FileType.Image)
        {
            RuleFor(file => file)
                .NotNull()
                .WithMessage("File is required")
                .Custom((file, context) =>
                {
                    string extension = new FileInfo(file.FileName).Extension;
                    string[] allowedExtensions = [];
                    if(fileType == FileType.Image)
                    {
                        allowedExtensions = [".png", ".jpg", ".jpeg", ".webp"];
                    }
                    else if (fileType == FileType.Pdf)
                    {
                        allowedExtensions = [".pdf"];
                    }

                    if (!allowedExtensions.Contains(extension))
                    {
                        context.AddFailure($"Invalid File Type. Allowed extensions are {string.Join(',', allowedExtensions)}");
                    }

                })
                .Custom((file, context) =>
                {
                    // Increaseing the size limit for pdf
                    if(fileType == FileType.Pdf && file.Size() > 50) {
                        context.AddFailure($"{file.FileName} size must be less than 50 Mb");
                    }
                    else if (fileType == FileType.Image && file.Size() > 50)
                    {
                        context.AddFailure($"{file.FileName} size must be less than 50 Mb");
                    }
                });
        }

        #endregion
    }
}
