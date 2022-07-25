using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aysa_Risk_Data_Access.Entities.Note
{
    public class NoteRepository : GenericRepository<Note, int>, INoteRepository
    {
        public NoteRepository(AysaRiskContext context) : base(context)
        {

        }

       
    }
}
