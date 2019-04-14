using MyWeatherAPI.Models;

namespace MyWeatherAPI.Repositories
{
    public class ConditionRepository
    {
        public ConditionModel Map(WeatherModel weather) {
            ConditionModel condition = new ConditionModel();
            condition.location = weather.location.name;

            //Current
            condition.current = new Current() {
                date = weather.current.last_updated,
                temperatureCelsious = weather.current.temp_c,
                temperatureFahrenheit = weather.current.temp_f,
                windDir = weather.current.wind_dir,
                windKph = weather.current.wind_kph,
                conditions = new ConditionDetails() {
                    text = weather.current.condition.text,
                    icon = weather.current.condition.icon
                }                
            };                        

            //Forecast
            condition.forecast = new System.Collections.Generic.List<Forecast>();
            foreach (var weatherForecastDay in weather.forecast.forecastday)
            {
                condition.forecast.Add(new Forecast()
                {
                    date = weatherForecastDay.date,
                    minTemperatureCelsious = weatherForecastDay.day.mintemp_c,
                    maxTemperatureCelsious = weatherForecastDay.day.maxtemp_c,
                    minTemperatureFahrenheit = weatherForecastDay.day.mintemp_f,
                    maxTemperatureFahrenheit = weatherForecastDay.day.maxtemp_f,
                    maxWindKph = weatherForecastDay.day.maxwind_kph,
                    conditions = new ConditionDetails()
                    {
                        text = weatherForecastDay.day.condition.text,
                        icon = weatherForecastDay.day.condition.icon
                    },                    
                    totalPrecipitationMm = weatherForecastDay.day.totalprecip_mm
                });
            }            

            return condition;
        }
    }
}