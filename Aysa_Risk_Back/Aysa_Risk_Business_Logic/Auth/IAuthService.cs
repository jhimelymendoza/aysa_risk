using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aysa_Risk_Business_Logic.Auth.dto;
using Aysa_Risk_Business_Logic.Common;

namespace Aysa_Risk_Business_Logic.Auth
{
    public interface IAuthService
    {
        Task<Response<LoginResponseDto>> Login(LoginRequest login);
       void Logout();
    }
}
