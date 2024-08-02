using Microsoft.AspNetCore.Mvc;

namespace Unitflix.Server.Helpers
{
    public static class Response
    {
        #region Methods

        /// <summary>
        /// Returns an error response
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        public static JsonResult Error(this HttpResponse response, string message)
        {
            return new JsonResult(new { error = message });
        }

        /// <summary>
        /// Returns a message response
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        public static JsonResult Message(this HttpResponse response, string message)
        {
            return new JsonResult(new { message = message });
        }

        #endregion
    }
}
