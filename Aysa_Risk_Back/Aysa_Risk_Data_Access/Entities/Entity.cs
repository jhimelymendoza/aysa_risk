using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aysa_Risk_Data_Access.Entities
{
    public class Entity<TKey> 
    {
        [Required]
        public TKey Id { get; set; }

    }
}
