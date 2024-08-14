namespace Unitflix.Server.DTOs
{
    public class PaymentPlanItemWriteDTO
    {
        public int? Id { get; set; }

        public decimal Amount { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }
    }
}
