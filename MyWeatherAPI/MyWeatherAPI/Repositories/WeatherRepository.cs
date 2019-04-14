using System;
using System.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using MyWeatherAPI.Models;

namespace MyWeatherAPI.Repositories
{
    public class WeatherRepository
    {
        private string APIURL = "http://api.apixu.com/v1/forecast.json?";

        public WeatherModel GetWeatherData(string location, string days)
        {
            return GetData(APIURL + "key=" + ConfigurationManager.AppSettings["APIXUKey"] + "&q=" + location + "&days=" + days);
        }    

        private WeatherModel GetData(string url)
        {
            string urlParameters = "";
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(url);

            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = client.GetAsync(urlParameters).Result; 
            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<WeatherModel>().Result;
            }
            else
            {
                return new WeatherModel();
            }
        }
    }
}