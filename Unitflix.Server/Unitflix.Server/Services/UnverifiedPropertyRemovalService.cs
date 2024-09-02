using Microsoft.EntityFrameworkCore;

using Quartz;

using Unitflix.Server.Database;
using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;
using File = Unitflix.Server.Models.File;

namespace Unitflix.Server.Services
{
    public class UnverifiedPropertyRemovalService : IJob
    {
        #region Private Members

        private ApplicationDbContext _dbContext;

        private IWebHostEnvironment _webHostEnvironment;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public UnverifiedPropertyRemovalService(ApplicationDbContext dbContext,
            IWebHostEnvironment webHostEnvironment)
        {
            _dbContext = dbContext;
            _webHostEnvironment = webHostEnvironment;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Executes the task of finding and deleting the unverified properties and all of their related data
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task Execute(IJobExecutionContext context)
        {
            List<Property> unverifiedProperties = _dbContext
                .Properties
                .Where(p => !p.IsVerified)
                .ToList();

            foreach (Property property in unverifiedProperties)
            {
                List<Overview> overviews = await _dbContext.Overviews.Where(t => t.PropertyId == property.Id).ToListAsync();
                _dbContext.Overviews.RemoveRange(overviews);

                List<Feature> features = await _dbContext.Features.Where(f => f.PropertyId == property.Id).ToListAsync();
                _dbContext.Features.RemoveRange(features);

                List<KeyHighlight> keyHighlights = await _dbContext.KeyHighlights.Where(k => k.PropertyId == property.Id).ToListAsync();
                _dbContext.KeyHighlights.RemoveRange(keyHighlights);

                if (property.Category == PropertyCategory.Project)
                {
                    List<PropertyDetail> propertyDetails = await _dbContext.PropertyDetails.Where(d => d.PropertyId == property.Id).ToListAsync();
                    _dbContext.PropertyDetails.RemoveRange(propertyDetails);

                    List<PaymentPlanItem> paymentPlanItems = await _dbContext.PaymentPlanItems.Where(p => p.PropertyId == property.Id).ToListAsync();
                    _dbContext.PaymentPlanItems.RemoveRange(paymentPlanItems);
                }

                if (property.Submission == PropertySubmission.Secondary)
                {
                    List<UserDetail> userDetails = await _dbContext
                        .UserDetails
                        .Where(u => u.PropertyId == property.Id)
                        .ToListAsync();
                    _dbContext.UserDetails.RemoveRange(userDetails);

                    List<Otp> otps = await _dbContext
                        .Otps
                        .Where(u => u.PropertyId == property.Id)
                        .ToListAsync();
                    _dbContext.Otps.RemoveRange(otps);
                }

                List<File> files = await _dbContext.Files.Where(f => f.PropertyId == property.Id).ToListAsync();
                files.ForEach(file =>
                {
                    FileHelpers.DeleteFile(_webHostEnvironment, file.Filename);
                });
                _dbContext.Files.RemoveRange(files);
                _dbContext.Properties.Remove(property);
            }

            _dbContext.SaveChanges();
            Console.WriteLine($"Found and removed {unverifiedProperties.Count} Unverified Properties at {DateTime.Now.ToString("HH:mm:ss dd-MM-yyyy")}");
        }

        #endregion
    }
}
