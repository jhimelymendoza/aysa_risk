using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aysa_Risk_Business_Logic.Common
{
    public class Response<T> where T : class
    {
        public Response(T dto, string error = null)
        {
            Result = dto;
            Error = error;
        }

        public Response(string error)
        {
            Error = error;
        }

        public T Result { get; }
        public string Error { get; }
    }

    public class BaseDto<TKey>
    {
        public TKey Id { get; set; }

    }
}
