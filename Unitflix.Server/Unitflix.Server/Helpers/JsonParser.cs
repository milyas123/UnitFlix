using Newtonsoft.Json;

namespace Unitflix.Server.Helpers
{
    public static class JsonParser
    {
        public static T Parse<T>(string json)
            where T : class, new()
        {
            return JsonConvert.DeserializeObject<T>(json) ?? new T();
        }
    }
}
