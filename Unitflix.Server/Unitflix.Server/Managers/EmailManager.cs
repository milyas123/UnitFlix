﻿using SmtpClient = MailKit.Net.Smtp.SmtpClient;

using System.Net;
using System.Net.Mail;
using System.Text;

using Unitflix.Server.Options;
using Microsoft.Extensions.Options;
using MimeKit;
using Unitflix.Server.Database;
using Unitflix.Server.Models;

namespace Unitflix.Server.Managers
{
    public class EmailManager
    {

        #region Private Members

        private EmailOptions _emailOptions;

        private ApplicationDbContext _dbContext;

        private ILogger<EmailManager> _logger;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public EmailManager(IOptions<EmailOptions> emailOptions,
            ApplicationDbContext dbContext,
            ILogger<EmailManager> logger)
        {
            _emailOptions = emailOptions.Value;
            _dbContext = dbContext;
            _logger = logger;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Sends an email to the specified user
        /// </summary>
        /// <returns></returns>
        public async Task SendEmail(string email, string subject, string message, bool self = false)
        {
            //Getting an email configuration
            EmailConfiguration? configuration = _dbContext.EmailConfigurations.FirstOrDefault();

            SmtpClient client = new SmtpClient();
            MimeMessage mailMessage = new MimeMessage();

            string smtpServer;
            int smtpPort;
            string adminEmail;
            string password;
            // If the configuration is available use that
            if (configuration != null)
            {
                smtpServer = configuration.Host;
                smtpPort = configuration.Port;
                adminEmail = configuration.Email;
                password = configuration.Password;
            }
            // Else use the fallback from the appsettings
            else
            {
                smtpServer = _emailOptions.SmtpServer;
                smtpPort = _emailOptions.SmtpPort;
                adminEmail = _emailOptions.Email;
                password = _emailOptions.Password;
            }

            client.Connect(smtpServer, smtpPort);
            client.Authenticate(adminEmail, password);
            mailMessage.From.Add(new MailboxAddress(adminEmail, adminEmail));
            if(self)
            {
                mailMessage.To.Add(new MailboxAddress(adminEmail, adminEmail));
            } 
            else
            {
                mailMessage.To.Add(new MailboxAddress(email, email));
            }
            mailMessage.Subject = subject;
            BodyBuilder builder = new BodyBuilder();
            builder.TextBody = message;
            mailMessage.Body = builder.ToMessageBody();

            try
            {
                await client.SendAsync(mailMessage);
                _logger.LogInformation("An Email has been sent from {from} to {to}", adminEmail, self ? adminEmail : email);
            } catch(Exception exc)
            {
                _logger.LogError(exc, "An Exception has occurred when sending an email has been sent from {from} to {to} with message {message}", adminEmail, self ? adminEmail : email, exc.Message);
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
