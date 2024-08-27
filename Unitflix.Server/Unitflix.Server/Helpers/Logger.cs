using Unitflix.Server.Database;
using Unitflix.Server.Enums;
using Unitflix.Server.Models;

namespace Unitflix.Server.Helpers
{
    public class Logger
    {

        #region Public Methods

        /// <summary>
        /// Logs the data to the Console
        /// </summary>
        /// <param name="message"></param>
        /// <param name="type"></param>
        public static void ConsoleLog(string message, MessageType type = MessageType.Info)
        {
            ConsoleColor color = ConsoleColor.White;
            string prefix = "INFO";

            switch (type)
            {
                case MessageType.Success:
                    color = ConsoleColor.Green;
                    prefix = "SUCCESS";
                    break;
                case MessageType.Error:
                    color = ConsoleColor.Red;
                    prefix = "ERROR";
                    break;
                case MessageType.Warn:
                    color = ConsoleColor.Yellow;
                    prefix = "WARN";
                    break;
            }
            Console.ForegroundColor = color;
            Console.WriteLine($"[{prefix}]: {message}");
            Console.ForegroundColor = ConsoleColor.White;
        }

        #endregion
    }
}
