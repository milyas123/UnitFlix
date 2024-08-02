using Unitflix.Server.Enums;

namespace Unitflix.Server.Models
{
    public class File
    {
        public int Id { get; set; }

        public int PropertyId { get; set; } 

        public string Filename { get; set; }

        public string Url { get; set; }

        public string Type { get; set; }

        public FilePurpose Purpose { get; set; }
    }
}
