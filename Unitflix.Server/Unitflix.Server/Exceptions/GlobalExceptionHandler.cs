using AutoMapper;

using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

using Unitflix.Server.Enums;
using Unitflix.Server.Helpers;

namespace Unitflix.Server.Exceptions
{
    public class GlobalExceptionHandler : IExceptionHandler
    {

        #region Private Members

        private ILogger<GlobalExceptionHandler> _logger;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger)
        {
            _logger = logger;
        }

        #endregion

        #region Overridden Methods

        /// <summary>
        /// Handles the exception
        /// </summary>
        /// <param name="httpContext"></param>
        /// <param name="exception"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
        {
            _logger.LogError(exception, "Exception occurred {Message}", exception.Message);

            ProblemDetails problemDetails = new ProblemDetails()
            {
                Status = StatusCodes.Status500InternalServerError,
                Title = "Server Error",
            };

            Exception exceptionToHandle = exception.InnerException != null ? exception.InnerException : exception;

            if (exceptionToHandle is AutoMapperMappingException)
            {
                problemDetails.Detail = $"Error when mapping objects";
            }
            else if (exceptionToHandle is JsonReaderException jsonException)
            {
                problemDetails.Detail = jsonException.Message;
            }
            else
            {
                problemDetails.Detail = exception.InnerException != null ? exception.InnerException.Message : exception.Message;
            }

            httpContext.Response.StatusCode = problemDetails.Status.Value;

            await httpContext.Response.WriteAsJsonAsync(problemDetails, cancellationToken);

            return true;
        }

        #endregion
    }
}
