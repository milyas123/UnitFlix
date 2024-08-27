using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

using System.Text.RegularExpressions;

using Unitflix.Server.DTOs;
using Unitflix.Server.Helpers;
using Unitflix.Server.Managers;
using Unitflix.Server.Options;

namespace Unitflix.Server.Controllers
{
    [Route("email")]
    public class EmailController : Controller
    {
        #region Private Members

        private EmailManager _emailManager;

        private EmailOptions _emailOptions;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public EmailController(EmailManager emailManager, IOptions<EmailOptions> emailOptions)
        {
            _emailManager = emailManager;
            _emailOptions = emailOptions.Value;
        }

        #endregion

        #region Routes

        /// <summary>
        /// Submits a contact form
        /// </summary>
        /// <param name="contactForm"></param>
        /// <returns></returns>
        [HttpPost("contact")]
        public async Task<ActionResult> SubmitForm([FromBody]ContactFormDTO contactForm)
        {
            if (contactForm == null)
            {
                return Response.Error("Invalid Contact Data");
            }

            Regex emailRegex = new Regex(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$");
            if (string.IsNullOrEmpty(contactForm.Name))
            {
                return Response.Error("Name is required");
            }
            else if (string.IsNullOrEmpty(contactForm.Email))
            {
                return Response.Error("Email is required");
            }
            else if (!emailRegex.IsMatch(contactForm.Email))
            {
                return Response.Error("Invalid Email. Email must be of form abc@example.com");
            }
            else if (string.IsNullOrEmpty(contactForm.Phone))
            {
                return Response.Error("Phone Number is required");
            }
            else if (string.IsNullOrWhiteSpace(contactForm.Message))
            {
                return Response.Error("Message is required");
            }
            else if (contactForm.Message.Length < 10)
            {
                return Response.Error("Message must be atleast 10 characters long");
            }

            string message = @$"Contact form submission received with detail
Name: {contactForm.Name}
Email: {contactForm.Email}
Phone: {contactForm.Phone}
Message: {contactForm.Message}
";
            await _emailManager.SendEmail(_emailOptions.Email, "Contact Form Submission Received", message, true);
            return Response.Message("Contact Form has been submitted successfully");
        }

        #endregion
    }
}
