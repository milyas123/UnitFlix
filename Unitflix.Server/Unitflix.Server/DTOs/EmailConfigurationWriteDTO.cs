namespace Unitflix.Server.DTOs
{
    public class EmailConfigurationWriteDTO
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string Host { get; set; }    

        public int Port { get; set; }
    }
}
