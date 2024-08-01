namespace Unitflix.Server.Models
{
    public class PaymentPlanItem
    {
        public int Id { get; set; }

        public int PropertyId { get; set; }

        public float Amount {  get; set; }

        public string Title {  get; set; }

        public string Description { get; set; }

    }
}
