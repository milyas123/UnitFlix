using FluentValidation.Results;

using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

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
        public static ContentResult Error(this HttpResponse response, string message, int statusCode = 400)
        {
            ContentResult result = new ContentResult();
            result.StatusCode = statusCode;
            result.Content = message;
            return result;
        }

        /// <summary>
        /// Returns an error response
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        public static ContentResult Error(this HttpResponse response, List<ValidationFailure> faliures, int statusCode = 400)
        {
            ContentResult result = new ContentResult();
            result.StatusCode = statusCode;
            result.Content = JsonConvert.SerializeObject(new { errors = faliures.Select(f => f.ErrorMessage) });
            return result;
        }

        /// <summary>
        /// Returns an error response
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        public static ContentResult Error(this HttpResponse response, List<string> errors, int statusCode = 400)
        {
            ContentResult result = new ContentResult();
            result.StatusCode = statusCode;
            result.Content = JsonConvert.SerializeObject(new { errors = errors });
            return result;
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

        /// <summary>
        /// Returns an object in response
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        public static JsonResult Message(this HttpResponse response, object data)
        {
            return new JsonResult(new { data = data});
        }

        /// <summary>
        /// Returns an object and message in response
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        public static JsonResult Message(this HttpResponse response, string message, object data)
        {
            return new JsonResult(new { data = data, message = message });
        }

        #endregion
    }
}
