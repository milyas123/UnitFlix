namespace Unitflix.Server.Options
{
    public class JWTOptions
    {
        public string ValidAudience { get; set; }

        public string ValidIssuer { get; set; }

        public string Secret { get; set; }
    }
}
