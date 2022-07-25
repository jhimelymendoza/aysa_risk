using Aysa_Risk_Business_Logic.Notes.dto;

namespace Aysa_Risk_Business_Logic.Notes
{
    public interface INoteService
    {
        public string Name { get; set; }

       public  Task<IEnumerable<NoteDto>> All();

       public Task<NoteDto> Add(NoteDto noteDto);

       public Task<NoteDto> Update(NoteDto noteDto);
       public Task<NoteDto> Delete(int id);
    }
}
