using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Aysa_Risk_Data_Access.Entities
{
    internal static class NoteSeed
    {

        public static void NoteHasData(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Note.Note>().HasData(new Note.Note[]
            {
                new Note.Note() { Id=1, Name="Nota 1",Description = "Soy la nota 1", Template = "Soy el template" },
            });
        }
    }
}
