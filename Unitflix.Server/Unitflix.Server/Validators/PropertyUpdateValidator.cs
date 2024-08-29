using FluentValidation;

using Microsoft.EntityFrameworkCore;

using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Enums;

namespace Unitflix.Server.Validators
{
    public class PropertyUpdateValidator : AbstractValidator<PropertyUpdateDTO>
    {
        #region Constructor
        
        /// <summary>
        /// Default Constructor
        /// </summary>
        public PropertyUpdateValidator(ApplicationDbContext dbContext)
        {
            RuleFor(dto => dto.Title)
                .NotEmpty()
                .WithMessage("Property Title is required");

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

            RuleFor(dto => dto.Beds)
                .GreaterThan(0)
                .WithMessage("Number of beds must be greater than or equal to 1");

            RuleFor(dto => dto.Baths)
                .GreaterThan(0)
                .WithMessage("Number of baths must be greater than or equal to 1");

            RuleFor(dto => dto.Area)
                .GreaterThan(0)
                .WithMessage("Area must be greater than or equal to 1");

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

            RuleFor(writeDTO => writeDTO.Status)
                .NotEmpty()
                .WithMessage("Property Status is required")
                .Custom((status, context) =>
                {
                    string category = PropertyCategory.Property.ToString();
                    //Checking whether any status with this name exists for property
                    if (!dbContext.PropertyStatuses.Where(p => p.Name.Equals(status) && p.Category == category).Any())
                    {
                        context.AddFailure("Invalid Status Provided. No related status found for the property");
                    }
                });

            RuleForEach(dto => dto.Features)
                .SetValidator(new FeatureValidator());

            RuleForEach(dto => dto.KeyHighlights)
                .SetValidator(new KeyHighlightValidator());

            RuleFor(dto => dto.Overview)
                .SetValidator(new OverviewValidator())
                .When(dto => dto.Overview != null);

            RuleForEach(dto => dto.GalleryImages)
                .SetValidator(new FileValidator());

            RuleFor(dto => dto.CoverImage)
                .SetValidator(new FileValidator())
                .When(dto => dto.CoverImage != null);
        }

        #endregion
    }
}
