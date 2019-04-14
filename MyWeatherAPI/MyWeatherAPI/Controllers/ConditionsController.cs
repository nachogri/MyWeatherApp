using MyWeatherAPI.Models;
using MyWeatherAPI.Repositories;
using System;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace MyWeatherAPI.Controllers
{
    public class ConditionsController : ApiController
    {
        // GET: api/Conditions
        public string Get()
        {
            throw new NotImplementedException();
        }

        // GET: api/Conditions?location=paris
        public string Get(string location,string days)
        {
            WeatherRepository weatherRepo = new WeatherRepository();
            WeatherModel weather = weatherRepo.GetWeatherData(location, days);

            ConditionRepository conditionRepo = new ConditionRepository();
            ConditionModel condition = conditionRepo.Map(weather);

            JavaScriptSerializer serializer = new JavaScriptSerializer();
            return serializer.Serialize(condition);
        }

        // POST: api/Conditions
        public void Post([FromBody]string value)
        {
            throw new NotImplementedException();
        }

        // PUT: api/Conditions/5
        public void Put(int id, [FromBody]string value)
        {
            throw new NotImplementedException();
        }

        // DELETE: api/Conditions/5
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
