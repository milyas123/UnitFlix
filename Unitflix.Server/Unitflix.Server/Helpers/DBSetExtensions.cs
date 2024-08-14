using Microsoft.EntityFrameworkCore;

using Unitflix.Server.Models;

namespace Unitflix.Server.Helpers
{
    public static class DBSetExtensions
    {
        #region Static Extension Methods

        /// <summary>
        /// Creates of updates the items in the database
        /// </summary>
        /// <typeparam name="T">The type of the items to be inserted</typeparam>
        /// <param name="dbSet">The db set in which items are to be inserted</param>
        /// <param name="items">The items to be inserted</param>
        public static void CreateOrUpdate<T>(this DbSet<T> dbSet, List<T> items, int propertyId)
            where T : BaseAttachedItem, new()
        {
            items.ForEach(item => item.PropertyId = propertyId);

            List<T> itemsToAdd = items.Where(t => t.Id == 0).ToList();
            List<T> itemsToUpdate = items.Where(t => t.Id > 0).ToList();

            //Adding the items
            dbSet.AddRange(itemsToAdd);

            foreach(T itemToUpdate in itemsToUpdate)
            {
                dbSet.UpdateRange(itemsToUpdate);
            }
        }

        #endregion
    }
}
