using Aysa_Risk_Business_Logic.Auth.dto;
using Aysa_Risk_Business_Logic.Common;
using Aysa_Risk_Business_Logic.Enterprises.dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;

namespace Aysa_Risk_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        [Route("Login")]
        [ResponseType(typeof(Response<LoginResponseDto>))]
        public async Task<Response<LoginResponseDto>> Login(LoginRequest loginRequest)
        {

            //var notes = await _enterpriseService.All();
            var userDto = new LoginResponseDto()
            {
                Token = "ssssss",
                user = new UserDto()
                {
                    Email = "jhimely@asdf.com",
                    Username = loginRequest.username,
                    Name = "Johan"
                }
            };
            if (loginRequest.username == "jhimely" && loginRequest.password == "12345678")
            {
                return new Response<LoginResponseDto>(userDto);
            }

            return new Response<LoginResponseDto>("usuario invalido");
        }
    }
}
