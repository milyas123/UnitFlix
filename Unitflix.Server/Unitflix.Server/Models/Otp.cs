namespace Unitflix.Server.Models
{
    public class Otp
    {
        public int Id { get; set; }

        public int PropertyId { get; set; }

        public string Email { get; set; }

        public string Code { get; set; }

        public DateTime ExpiresAt { get; set; }
    }
}
