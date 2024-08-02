using Unitflix.Server.Enums;

namespace Unitflix.Server.DTOs
{
    public class PropertyAPIDTO
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

        public PropertyStatus Status { get; set; }

        public int? Developer { get; set; }

        public decimal? DownPayment { get; set; }

        public string? PaymentPlan { get; set; }

        public string? HandOver { get; set; }

        public bool Featured { get; set; }

        public string Features { get; set; }

        public string PaymentPlanItems { get; set; }

        public string KeyHighlights { get; set; }

        public string Overview { get; set; }

        public string PropertyDetails { get; set; }

        public string UserDetail { get; set; }

        public List<IFormFile> GalleryImages { get; set; } = new List<IFormFile>();

        public IFormFile CoverImage { get; set; }
    }
}
