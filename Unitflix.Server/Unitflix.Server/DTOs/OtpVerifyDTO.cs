namespace Unitflix.Server.DTOs
{
    public class OtpVerifyDTO
    {
        public string Otp { get; set; }

        public string Email { get; set; }

        public int PropertyId { get; set; }
    }
}
