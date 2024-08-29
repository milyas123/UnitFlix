using FluentValidation;

using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Enums;

namespace Unitflix.Server.Validators
{
    public class ProjectUpdateValidator : AbstractValidator<PropertyUpdateDTO>
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public ProjectUpdateValidator(ApplicationDbContext dbContext)
        {
            RuleFor(dto => dto.Title)
                .NotEmpty()
                .WithMessage("Project Title is required");

            RuleFor(dto => dto.location)
                .GreaterThan(0)
                .WithMessage("Location Id must be greater than or equal to 1")
                .Custom((location, context) =>
                {
                    if (!dbContext.Locations.Any(loc => loc.Id == location))
                    {
                        context.AddFailure("Invalid location specified");
                    }
                });

            RuleFor(dto => dto.Developer)
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

            RuleFor(dto => dto.DownPayment)
                .GreaterThan(0)
                .WithMessage("Down payment must be greater than or equal to 1");

            RuleFor(dto => dto.PaymentPlan)
                .NotEmpty()
                .WithMessage("Payment plan is required for a project");

            RuleFor(dto => dto.HandOver)
                .NotEmpty()
                .WithMessage("Handover is required for a project");

            RuleFor(dto => dto.Price)
                .GreaterThan(0)
                .WithMessage("Price must be greater than or equal to 1");

            RuleFor(dto => dto.PropertyType)
                .GreaterThan(0)
                .WithMessage("Property Type Id must be greater than or equal to 1")
                .Custom((propertyType, context) =>
                {
                    if (!dbContext.PropertyTypes.Any(type => type.Id == propertyType))
                    {
                        context.AddFailure("Invalid property type specified");
                    }
                });

            RuleForEach(dto => dto.Features)
                .SetValidator(new FeatureValidator());

            RuleForEach(dto => dto.KeyHighlights)
                .SetValidator(new KeyHighlightValidator());

            RuleForEach(dto => dto.PaymentPlanItems)
                .SetValidator(new PaymentPlanItemValidator());

            RuleForEach(dto => dto.PropertyDetails)
                .SetValidator(new PropertyDetailValidator());

            RuleFor(dto => dto.Overview)
                .SetValidator(new OverviewValidator())
                .When(dto => dto.Overview != null);

            RuleForEach(dto => dto.GalleryImages)
                .SetValidator(new FileValidator());

            RuleFor(dto => dto.CoverImage)
                .SetValidator(new FileValidator())
                .When(dto => dto.CoverImage != null);

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
