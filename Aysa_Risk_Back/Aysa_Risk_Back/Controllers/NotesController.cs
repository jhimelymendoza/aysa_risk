using Aysa_Risk_Business_Logic.Common;
using Aysa_Risk_Business_Logic.Notes;
using Aysa_Risk_Business_Logic.Notes.dto;
using Aysa_Risk_Data_Access;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NSwag.Annotations;

namespace Aysa_Risk_Back.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly INoteService _noteService;
        private readonly AysaRiskContext _context;

        public NotesController(ILogger<WeatherForecastController> logger, INoteService noteService, AysaRiskContext context)
        {
            _logger = logger;
            _noteService = noteService;
            _context = context;
        }
        [HttpGet]
        [ResponseType(typeof(List<NoteDto>))]
        public async Task<Response<IEnumerable<NoteDto>>> Index()
        {

            var notes = await _noteService.All();

            return new Response<IEnumerable<NoteDto>>(notes);
        }

        [HttpPost]
        [ResponseType(typeof(List<NoteDto>))]
        public async Task<Response<NoteDto>> Post(NoteDto note)
        {

            var notes = await _noteService.Add(note);

            return new Response<NoteDto>(notes);
        }

        [HttpPut]
        [ResponseType(typeof(List<NoteDto>))]
        public async Task<Response<NoteDto>> Put(NoteDto note)
        {

            var notes = await _noteService.Update(note);

            return new Response<NoteDto>(notes);
        }

        [HttpDelete]
        [ResponseType(typeof(List<NoteDto>))]
        public async Task<Response<NoteDto>> Delete(int id)
        {

            var notes = await _noteService.Delete(id);

            return new Response<NoteDto>(notes);
        }


    }
}
