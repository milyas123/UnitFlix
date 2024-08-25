namespace Unitflix.Server.Models
{
    public class EmailConfiguration
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Host { get; set; }

        public int Port { get; set; }
    }
}
