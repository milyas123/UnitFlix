namespace Unitflix.Server.Helpers
{
    public class OtpCodeGenerator
    {
        /// <summary>
        /// Generates an otp code
        /// </summary>
        /// <param name="length"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentException"></exception>
        public static string Generate(int length = 6)
        {
            if (length <= 0)
            {
                throw new ArgumentException("Length must be a positive integer");
            }

            const string digits = "0123456789";
            Random random = new Random();
            char[] otp = new char[length];

            for (int i = 0; i < length; i++)
            {
                otp[i] = digits[random.Next(digits.Length)];
            }

            return new string(otp);
        }
    }
}
