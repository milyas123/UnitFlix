using Unitflix.Server.Enums;

namespace Unitflix.Server.Models
{
    public class Log
    {
        public int Id { get; set; }

        public string Information { get; set; }

        public MessageType Level { get; set; }

        public DateTime OccurredAt { get; set; }
    }
}
