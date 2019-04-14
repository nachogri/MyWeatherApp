using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWeatherAPI.Models
{    

    public class ConditionModel
    {
        public string location { get; set; }
        public Current current { get; set; }
        public List<Forecast> forecast { get; set; }
    }

    public class Current
    {
        public string date { get; set; }
        public double temperatureCelsious { get; set; }
        public double temperatureFahrenheit { get; set; }
        public ConditionDetails conditions { get; set; }
        public int humidity { get; set; }
        public double windKph { get; set; }
        public string windDir { get; set; }
        public double precipitationMm { get; set; }
    }

    public class Forecast
    {
        public string date { get; set; }
        public double minTemperatureCelsious { get; set; }
        public double maxTemperatureCelsious { get; set; }
        public double minTemperatureFahrenheit { get; set; }
        public double maxTemperatureFahrenheit { get; set; }
        public ConditionDetails conditions { get; set; }
        public int avgHumidity { get; set; }
        public double maxWindKph { get; set; }
        public double totalPrecipitationMm { get; set; }
    }

    public class ConditionDetails
    {
        public string text { get; set; }
        public string icon { get; set; }
    }
}