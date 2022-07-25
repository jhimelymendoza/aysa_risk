using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aysa_Risk_Data_Access.Entities;
using Aysa_Risk_Data_Access.Entities.Note;
using Microsoft.EntityFrameworkCore;

namespace Aysa_Risk_Data_Access
{
    public class AysaRiskContext : DbContext
    {
        public AysaRiskContext(DbContextOptions<AysaRiskContext> options)
            : base(options) { }

        protected AysaRiskContext(DbContextOptions options)
            : base(options) { }

        protected AysaRiskContext()
            : base() { }

        public DbSet<Note> Notes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            NoteSeed.NoteHasData(modelBuilder);
        }
    }
}
