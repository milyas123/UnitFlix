using System.Drawing;

using Unitflix.Server.Enums;
using Unitflix.Server.Results;

namespace Unitflix.Server.Helpers
{
    public static class FileHelpers
    {
        #region Public Properties

        public static string DATA_FOLDER = "public";

        #endregion

        #region Public Methods

        public static double Size(this IFormFile file)
        {
            double size = file.Length / (1024 * 1024 * 1.0);
            return size;
        }

        public static async Task<FileSaveResult?> Save(this IFormFile file, IWebHostEnvironment webHost, string host = "localhost:7001")
        {
            string directory = Path.Join(webHost.WebRootPath, DATA_FOLDER);
            EnsureDirectory(directory);
            string fileName = GenerateFileName(file.FileName);
            string path = Path.Join(directory, fileName);
            try
            {
                using (FileStream stream = new FileStream(path, FileMode.Create))
                {
                    await file.OpenReadStream().CopyToAsync(stream);
                }
                return new FileSaveResult(){ FileName = fileName, FilePath = path, Url = $"https://{host}/{DATA_FOLDER}/{fileName}", Type = Path.GetExtension(fileName) };
            } catch(Exception exc)
            {
                Logger.Log(exc.Message, MessageType.Error);
                return null;
            }
        }

        /// <summary>
        /// Deletes the file specified
        /// </summary>
        /// <param name="webHost"></param>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public static void DeleteFile(IWebHostEnvironment webHost, string fileName)
        {
            string directory = Path.Join(webHost.WebRootPath, DATA_FOLDER);
            string path = Path.Join(directory, fileName);
            try
            {
                if(File.Exists(path))
                {
                    File.Delete(path);
                }
            } catch(Exception exc)
            {
                Logger.Log(exc.Message, MessageType.Error);
            }
        }

        #endregion

        #region Private Methods

        private static void EnsureDirectory(string directory)
        {
            if(!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }
        }

        private static string GenerateFileName(string name)
        {
            return $"{DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss")}-{name}";
        }

        #endregion
    }
}
