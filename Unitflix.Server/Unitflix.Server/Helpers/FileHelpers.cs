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

        /// <summary>
        /// Returns the size of the file in Mbs
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        public static double Size(this IFormFile file)
        {
            double size = file.Length / (1024 * 1024 * 1.0);
            return size;
        }

        /// <summary>
        /// Saves the file in the wwwroot/uploads folder
        /// </summary>
        /// <param name="file">The file to be saved</param>
        /// <param name="webHost">The env to use to find the root path</param>
        /// <param name="protocol">The protocol at which server is running</param>
        /// <param name="host">The hostname of the server to use in file url</param>
        /// <returns></returns>
        public static async Task<FileSaveResult?> Save(this IFormFile file, IWebHostEnvironment webHost, string baseUrl)
        {
            string directory = Path.Join(webHost.ContentRootPath, DATA_FOLDER);
            EnsureDirectory(directory);
            string fileName = GenerateFileName(file.FileName);
            string path = Path.Join(directory, fileName);
            try
            {
                using (FileStream stream = new FileStream(path, FileMode.Create))
                {
                    await file.OpenReadStream().CopyToAsync(stream);
                }
                return new FileSaveResult(){ FileName = fileName, FilePath = path, Url = $"{baseUrl}/{DATA_FOLDER}/{fileName}", Type = Path.GetExtension(fileName) };
            } catch(Exception exc)
            {
                Logger.ConsoleLog(exc.Message, MessageType.Error);
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
            string directory = Path.Join(webHost.ContentRootPath, DATA_FOLDER);
            string path = Path.Join(directory, fileName);
            try
            {
                if(File.Exists(path))
                {
                    File.Delete(path);
                }
            } catch(Exception exc)
            {
                Logger.ConsoleLog(exc.Message, MessageType.Error);
            }
        }

        #endregion

        #region Private Methods

        /// <summary>
        /// Ensures that a directory exists on the file system
        /// </summary>
        /// <param name="directory"></param>
        private static void EnsureDirectory(string directory)
        {
            if(!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }
        }

        /// <summary>
        /// Generates a unique file name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        private static string GenerateFileName(string name)
        {
            string extension = Path.GetExtension(name);
            string nameWithoutExtension = name.Replace(extension, "");
            nameWithoutExtension = nameWithoutExtension.Substring(0, Math.Min(nameWithoutExtension.Length, 30));
            return $"{Guid.NewGuid()}-{nameWithoutExtension}{extension}";
        }

        #endregion
    }
}
