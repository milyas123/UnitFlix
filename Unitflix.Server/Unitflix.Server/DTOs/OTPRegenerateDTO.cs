namespace Unitflix.Server.DTOs
{
    public class OTPRegenerateDTO
    {
        /// <summary>
        /// The id of the property against which the otp was previously generated
        /// </summary>
        public int PropertyId { get; set; }

        /// <summary>
        /// The email of the user
        /// </summary>
        public string Email { get; set; }
    }
}
