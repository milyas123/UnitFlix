using FluentValidation;

using Microsoft.EntityFrameworkCore;

using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Enums;

namespace Unitflix.Server.Validators
{
    public class PropertyValidator : AbstractValidator<PropertyWriteDTO>
    {
        #region Constructor
        
        /// <summary>
        /// Default Constructor
        /// </summary>
        public PropertyValidator(ApplicationDbContext dbContext)
        {
            RuleFor(writeDTO => writeDTO.Category)
                .Equal(PropertyCategory.Property)
                .WithMessage("Can only add property from this API");

            RuleFor(writeDTO => writeDTO.Title)
                .NotEmpty()
                .WithMessage("Property Title is required");

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

            RuleFor(writeDTO => writeDTO.Beds)
                .GreaterThan(0)
                .WithMessage("Number of beds must be greater than or equal to 1");

            RuleFor(writeDTO => writeDTO.Baths)
                .GreaterThan(0)
                .WithMessage("Number of baths must be greater than or equal to 1");

            RuleFor(writeDTO => writeDTO.Area)
                .GreaterThan(0)
                .WithMessage("Area must be greater than or equal to 1");

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
                .WithMessage("Property must have atleast 1 feature");

            RuleForEach(writeDTO => writeDTO.Features)
                .SetValidator(new FeatureValidator());

            RuleFor(writeDTO => writeDTO.KeyHighlights)
                .NotEmpty()
                .WithMessage("Property must have atleast 1 key highlight");

            RuleForEach(writeDTO => writeDTO.KeyHighlights)
                .SetValidator(new KeyHighlightValidator());

            RuleFor(writeDTO => writeDTO.Overview)
                .NotEmpty()
                .WithMessage("Property must have an overview")
                .SetValidator(new OverviewValidator());

            RuleFor(writeDTO => writeDTO.GalleryImages)
                .NotEmpty()
                .WithMessage("Property must have at least 1 gallery image");

            RuleForEach(writeDTO => writeDTO.GalleryImages)
                .SetValidator(new FileValidator());

            RuleFor(writeDTO => writeDTO.CoverImage)
                .NotEmpty()
                .WithMessage("Property must have a cover image")
                .SetValidator(new FileValidator());
        }

        #endregion
    }
}
