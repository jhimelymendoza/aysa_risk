using System.Net;
using Aysa_Risk_Business_Logic.Administration;
using Aysa_Risk_Business_Logic.Common;
using Aysa_Risk_Business_Logic.Notes;
using Aysa_Risk_Business_Logic.Notes.dto;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;

namespace Aysa_Risk_Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly INoteService _noteService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, INoteService noteService)
        {
            _logger = logger;
            _noteService = noteService;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        [Route("Title")]
        public string Title()
        {
            return this._noteService.Name;
        }

      
    }
}