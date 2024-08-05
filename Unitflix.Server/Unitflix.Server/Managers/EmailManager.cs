using SmtpClient = MailKit.Net.Smtp.SmtpClient;

using System.Net;
using System.Net.Mail;
using System.Text;

using Unitflix.Server.Options;
using Microsoft.Extensions.Options;
using MimeKit;

namespace Unitflix.Server.Managers
{
    public class EmailManager
    {

        #region Private Members

        private EmailOptions _emailOptions;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public EmailManager(IOptions<EmailOptions> emailOptions)
        {
            _emailOptions = emailOptions.Value;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Sends an email to the specified user
        /// </summary>
        /// <returns></returns>
        public async Task SendEmail(string email, string subject, string message)
        {
            SmtpClient client = new SmtpClient();
            client.Connect(_emailOptions.SmtpServer, _emailOptions.SmtpPort);
            client.Authenticate(_emailOptions.Email, _emailOptions.Password);

            MimeMessage mailMessage = new MimeMessage();
            mailMessage.From.Add(new MailboxAddress(_emailOptions.Email, _emailOptions.Email));
            mailMessage.To.Add(new MailboxAddress(email, email));
            mailMessage.Subject = subject;
            BodyBuilder builder = new BodyBuilder();
            builder.TextBody = message;
            mailMessage.Body = builder.ToMessageBody();

            try
            {
                await client.SendAsync(mailMessage);
            } catch(Exception exc)
            {
                Console.Write(exc);
            }
            finally
            {
                client.Disconnect(true);
                client.Dispose();
            }
        }

        #endregion
    }
}
