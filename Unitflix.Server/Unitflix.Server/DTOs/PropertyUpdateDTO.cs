using Unitflix.Server.Enums;

namespace Unitflix.Server.DTOs
{
    public class PropertyUpdateDTO
    {
        public PropertyPurpose Purpose { get; set; }

        public string Title { get; set; }

        public int location { get; set; }

        public int Beds { get; set; }

        public int Baths { get; set; }

        public decimal Area { get; set; }

        public decimal Price { get; set; }

        public int PropertyType { get; set; }

        public int? Developer { get; set; }

        public decimal? DownPayment { get; set; }

        public string? PaymentPlan { get; set; }

        public string? HandOver { get; set; }

        public bool Featured { get; set; }

        public string Status { get; set; }

        public List<int> FeaturesToRemove { get; set; } = new List<int>();

        public List<FeatureWriteDTO> Features { get; set; } = new List<FeatureWriteDTO>();

        public List<int> PaymentPlanItemsToRemove { get; set; } = new List<int>();

        public List<PaymentPlanItemWriteDTO> PaymentPlanItems { get; set; } = new List<PaymentPlanItemWriteDTO>();

        public List<int> KeyHighlightsToRemove { get; set; } = new List<int>();

        public List<KeyHighlightWriteDTO> KeyHighlights { get; set; } = new List<KeyHighlightWriteDTO>();

        public OverviewWriteDTO Overview { get; set; } = new OverviewWriteDTO();

        public List<int> PropertyDetailsToRemove { get; set; } = new List<int>();

        public List<PropertyDetailsWriteDTO> PropertyDetails { get; set; } = new List<PropertyDetailsWriteDTO>();

        public List<int> GalleryImagesToRemove { get; set; } = new List<int>();

        public List<IFormFile> GalleryImages { get; set; } = new List<IFormFile>();

        public IFormFile CoverImage { get; set; }

        public IFormFile Brochure { get; set; }

        public IFormFile FloorPlan { get; set; }
    }
}
