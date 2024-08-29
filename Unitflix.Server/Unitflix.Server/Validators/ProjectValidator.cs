using FluentValidation;

using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Enums;

namespace Unitflix.Server.Validators
{
    public class ProjectValidator : AbstractValidator<PropertyWriteDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public ProjectValidator(ApplicationDbContext dbContext)
        {
            RuleFor(writeDTO => writeDTO.Category)
                .Equal(PropertyCategory.Project)
                .WithMessage("Can only add project from this API");

            RuleFor(writeDTO => writeDTO.Title)
                .NotEmpty()
                .WithMessage("Project Title is required");

            RuleFor(writeDTO => writeDTO.location)
                .GreaterThan(0)
                .WithMessage("Location Id must be greater than or equal to 1")
                .Custom((location, context) =>
                {
                    if (!dbContext.Locations.Any(loc => loc.Id == location))
                    {
                        context.AddFailure("Invalid location specified");
                    }
                });

            RuleFor(writeDTO => writeDTO.Developer)
                .NotNull()
                .WithMessage("Developer is required")
                .GreaterThan(0)
                .WithMessage("Developer Id must be greater than or equal to 1")
                .Custom((developer, context) =>
                {
                    if (!dbContext.Developers.Any(dev => dev.Id == developer))
                    {
                        context.AddFailure("Invalid developer specified");
                    }
                });

            RuleFor(writeDTO => writeDTO.Status)
                .NotEmpty()
                .WithMessage("Project Status is required")
                .Custom((status, context) =>
                {
                    string category = PropertyCategory.Project.ToString();
                    //Checking whether any status with this name exists for property
                    if (!dbContext.PropertyStatuses.Where(p => p.Name.Equals(status) && p.Category == category).Any())
                    {
                        context.AddFailure("Invalid Status Provided. No related status found for the project");
                    }
                });

            RuleFor(writeDTO => writeDTO.DownPayment)
                .GreaterThan(0)
                .WithMessage("Down payment must be greater than or equal to 1");

            RuleFor(writeDTO => writeDTO.PaymentPlan)
                .NotEmpty()
                .WithMessage("Payment plan is required for a project");

            RuleFor(writeDTO => writeDTO.HandOver)
                .NotEmpty()
                .WithMessage("Handover is required for a project");

            RuleFor(writeDTO => writeDTO.Price)
                .GreaterThan(0)
                .WithMessage("Price must be greater than or equal to 1");

            RuleFor(writeDTO => writeDTO.PropertyType)
                .GreaterThan(0)
                .WithMessage("Property Type Id must be greater than or equal to 1")
                .Custom((propertyType, context) =>
                {
                    if (!dbContext.PropertyTypes.Any(type => type.Id == propertyType))
                    {
                        context.AddFailure("Invalid property type specified");
                    }
                });

            RuleFor(writeDTO => writeDTO.Features)
                .NotEmpty()
                .WithMessage("Project must have atleast 1 feature");

            RuleForEach(writeDTO => writeDTO.Features)
                .SetValidator(new FeatureValidator());

            RuleFor(writeDTO => writeDTO.KeyHighlights)
                .NotEmpty()
                .WithMessage("Project must have atleast 1 key highlight");

            RuleForEach(writeDTO => writeDTO.KeyHighlights)
                .SetValidator(new KeyHighlightValidator());

            RuleFor(writeDTO => writeDTO.PaymentPlanItems)
                .NotEmpty()
                .WithMessage("Project must have atleast 1 payment plan item");

            RuleForEach(writeDTO => writeDTO.PaymentPlanItems)
                .SetValidator(new PaymentPlanItemValidator());

            RuleFor(writeDTO => writeDTO.PropertyDetails)
                .NotEmpty()
                .WithMessage("Project must have atleast 1 property detail item");

            RuleForEach(writeDTO => writeDTO.PropertyDetails)
                .SetValidator(new PropertyDetailValidator());

            RuleFor(writeDTO => writeDTO.Overview)
                .NotEmpty()
                .WithMessage("Project must have an overview")
                .SetValidator(new OverviewValidator());

            RuleFor(writeDTO => writeDTO.GalleryImages)
                .NotEmpty()
                .WithMessage("Project must have at least 1 gallery image");

            RuleForEach(writeDTO => writeDTO.GalleryImages)
                .SetValidator(new FileValidator());

            RuleFor(writeDTO => writeDTO.CoverImage)
                .NotEmpty()
                .WithMessage("Project must have a cover image")
                .SetValidator(new FileValidator());

            RuleFor(writeDTO => writeDTO.Brochure)
                .SetValidator(new FileValidator(FileType.Pdf))
                .When(writeDTO => writeDTO.Brochure != null);

            RuleFor(writeDTO => writeDTO.FloorPlan)
                .SetValidator(new FileValidator(FileType.Pdf))
                .When(writeDTO => writeDTO.FloorPlan != null);
        }

        #endregion
    }
}
