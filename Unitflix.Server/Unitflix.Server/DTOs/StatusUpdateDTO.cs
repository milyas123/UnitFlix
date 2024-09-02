using Unitflix.Server.Enums;

namespace Unitflix.Server.DTOs
{
    public class StatusUpdateDTO
    {
        public PropertyApprovalStatus Status { get; set; }

        /// <summary>
        /// The message to be conveyed to the user
        /// </summary>
        public string? Message { get; set; }
    }
}
