using Unitflix.Server.Enums;

namespace Unitflix.Server.Helpers
{
    public static class Logger
    {
        public static void Log(string message, MessageType type = MessageType.Info)
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
    }
}
