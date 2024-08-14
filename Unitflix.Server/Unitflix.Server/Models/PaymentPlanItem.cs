namespace Unitflix.Server.Models
{
    public class PaymentPlanItem : BaseAttachedItem
    {
        public decimal Amount {  get; set; }

        public string Title {  get; set; }

        public string Description { get; set; }

    }
}
