using Unitflix.Server.Enums;
using Unitflix.Server.Models;

namespace Unitflix.Server.DTOs
{
    public class PropertyWriteDTO
    {
        public PropertyPurpose Purpose { get; set; }

        public string Title { get; set; }

        public int location { get; set; }

        public PropertyCategory Category { get; set; }

        public int Beds { get; set; }

        public int Baths { get; set; }

        public decimal Area { get; set; }

        public decimal Price { get; set; }

        public int PropertyType { get; set; }

        public PropertyStatus ApprovalStatus { get; set; }

        public int? Developer { get; set; }

        public decimal? DownPayment { get; set; }

        public string? PaymentPlan { get; set; }

        public string? HandOver { get; set; }

        public bool Featured { get; set; }

        public string Status { get; set; }

        public List<FeatureWriteDTO> Features { get; set; } = new List<FeatureWriteDTO>();

        public List<PaymentPlanItemWriteDTO> PaymentPlanItems { get; set; } = new List<PaymentPlanItemWriteDTO>();

        public List<KeyHighlightWriteDTO> KeyHighlights { get; set; } = new List<KeyHighlightWriteDTO>();

        public OverviewWriteDTO Overview { get; set; } = new OverviewWriteDTO();

        public List<PropertyDetailsWriteDTO> PropertyDetails { get; set; } = new List<PropertyDetailsWriteDTO>();

        public UserDetailWriteDTO UserDetail { get; set; } = new UserDetailWriteDTO();

        public List<IFormFile> GalleryImages { get; set; } = new List<IFormFile>();

        public IFormFile CoverImage { get; set; }

    }
}
