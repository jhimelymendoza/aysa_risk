using System.Transactions;
using AutoMapper;
using Aysa_Risk_Business_Logic.Administration;
using Aysa_Risk_Business_Logic.Notes.dto;
using Aysa_Risk_Data_Access;
using Aysa_Risk_Data_Access.Entities.Note;
using Microsoft.EntityFrameworkCore;

namespace Aysa_Risk_Business_Logic.Notes
{
    public class NoteService : INoteService
    {

        private readonly AysaRiskContext _context;
        private readonly INoteRepository _noteRepository;
        private readonly IMapper _mapper;

        public NoteService(AysaRiskContext context, IMapper mapper, INoteRepository noteRepository )
        {
            this._context = context;
            this._mapper = mapper;
            this._noteRepository = noteRepository;
        }


        public string Name { get; set; }

        public async Task<IEnumerable<NoteDto>> All()
        {
            var direct = await this._context.Notes.ToListAsync();

            var all = await this._noteRepository.GetAllAsync();
            return _mapper.Map<List<NoteDto>>(all);
            //return all.Select(x => _mapper.Map<NoteDto>(x));

           

        }

        public async Task<NoteDto> Add(NoteDto noteDto)
        {

            // query para logica usuario pesada

            // this._context.Notes
            var note = _mapper.Map<Note>(noteDto);

            using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
            {

                this._noteRepository.Add(_mapper.Map<Note>(noteDto));
                await this._noteRepository.SaveChangesAsync();
                scope.Complete();
            }

       


            return _mapper.Map<NoteDto>(note); ;

        }

        public async Task<NoteDto> Update(NoteDto noteDto)
        {
            var note = await this._noteRepository.GetByIdAsync(noteDto.Id);

            note.Description = noteDto.Description;
            note.Template = noteDto.Description;
            note.Name = noteDto.Name;

            this._noteRepository.Update(note);
            await this._noteRepository.SaveChangesAsync();

            return _mapper.Map<NoteDto>(note); ;

        }

        public async Task<NoteDto> Delete(int id)
        {
            var note = await this._noteRepository.GetByIdAsync(id);
            this._noteRepository.Delete(id);
            await this._noteRepository.SaveChangesAsync();

            return _mapper.Map<NoteDto>(note); ;
        }
    }
}
