using Quartz;

using Unitflix.Server.Database;

namespace Unitflix.Server.Services
{
    public class JobSchedulingService
    {
        #region Public Methods

        /// <summary>
        /// Schedules the relevant service
        /// </summary>
        /// <param name="provider"></param>
        public async Task ScheduleService(IServiceProvider provider)
        {
            using(IServiceScope services = provider.CreateScope())
            {
                ISchedulerFactory factory = services.ServiceProvider.GetRequiredService<ISchedulerFactory>();
                IScheduler scheduler = await factory.GetScheduler();

                IJobDetail job = JobBuilder.Create<UnverifiedPropertyRemovalService>()
                    .WithIdentity("UnverifiedPropertyService", "g1")
                    .Build();
                
                ITrigger trigger = TriggerBuilder.Create()
                    .WithIdentity("UnverifiedPropertyServiceScheduler", "g1")
                    .StartNow()
                    .WithSimpleSchedule(x =>
                    {
                        x
                        .WithIntervalInHours(24)
                        .RepeatForever();
                    })
                    .Build();

                await scheduler.ScheduleJob(job, trigger);
            }
        }

        #endregion
    }
}
