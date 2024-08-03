using System.ComponentModel;

using Unitflix.Server.Enums;

namespace Unitflix.Server.Models
{
    public class Property
    {
        public int Id { get; set; }

        public PropertyPurpose Purpose { get; set; }

        public string Title { get; set; }

        public int location { get; set; }

        public PropertyCategory Category{ get; set; }

        public int Beds { get; set; }

        public int Baths { get; set; }

        public decimal Area { get; set; }

        public decimal Price { get; set; }

        public int PropertyType { get; set; }

        public PropertyStatus Status { get; set; }  

        public int? Developer { get; set; }

        public decimal DownPayment { get; set; }

        public string? PaymentPlan { get; set; }

        public string? HandOver { get; set; }

        public bool Featured { get; set; }

        public PropertySubmission Submission {  get; set; }

        public DateTime DateAdded { get; set; }

        public Overview Overview { get; set; }

        public List<File> Files { get; set; }

        public List<KeyHighlight> KeyHighlights { get; set; }

        public List<Feature> Features { get; set; }

        public List<PaymentPlanItem> PaymentPlanItems { get; set; }

        public List<PropertyDetail> PropertyDetails { get; set; }
    }
}
