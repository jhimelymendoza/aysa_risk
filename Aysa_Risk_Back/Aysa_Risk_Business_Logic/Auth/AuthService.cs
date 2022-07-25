using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aysa_Risk_Business_Logic.Auth.dto;
using Aysa_Risk_Business_Logic.Common;

namespace Aysa_Risk_Business_Logic.Auth
{
    public class AuthService : IAuthService
    {
        public async Task<Response<LoginResponseDto>> Login(LoginRequest login)


        {
            var response = await Task.FromResult(new Response<LoginResponseDto>(new LoginResponseDto()
            {
                Token = "token",
                user = new UserDto() { Name = "johan", Email = "jhimely@gmail.com", Username = "jhimely" }
            }));
            return response;
        }

        public void Logout()
        {
            throw new NotImplementedException();
        }
    }
}
