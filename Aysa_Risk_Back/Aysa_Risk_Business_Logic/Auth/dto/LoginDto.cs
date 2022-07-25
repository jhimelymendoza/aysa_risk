using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aysa_Risk_Business_Logic.Auth.dto
{
    public class LoginResponseDto
    {
        public UserDto user { get; set; }
        public string Token { get; set; }
    }

    public class LoginRequest
    {
        public string username { get; set; }
        public string password { get; set; }
        public int enterpriseId { get; set; }
        public bool remember { get; set; }
    }
}
