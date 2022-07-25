using AutoMapper;
using Aysa_Risk_Business_Logic.Common;
using Aysa_Risk_Data_Access.Entities.Note;

namespace Aysa_Risk_Business_Logic.Notes.dto
{
    public class NoteDto : BaseDto<int>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Template { get; set; }
    }

    public class NoteProfiles : Profile
    {
        public NoteProfiles()
        {
            CreateMap<Note, NoteDto>().ReverseMap();
        }
    }
}
