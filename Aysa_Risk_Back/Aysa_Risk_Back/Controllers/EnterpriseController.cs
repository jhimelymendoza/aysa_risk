using Aysa_Risk_Business_Logic.Common;
using Aysa_Risk_Business_Logic.Enterprises.dto;
using Aysa_Risk_Business_Logic.Notes.dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;

namespace Aysa_Risk_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnterpriseController : ControllerBase
    {

        [HttpGet]
        [ResponseType(typeof(List<EnterpriseDto>))]
        public async Task<Response<IEnumerable<EnterpriseDto>>> Index()
        {

            //var notes = await _enterpriseService.All();
            var enterprise = new List<EnterpriseDto>()
            {

                new EnterpriseDto()
                {
                    Id = 1,
                    Label = "Aysa"
                },
                new EnterpriseDto()
                {
                    Id = 2,
                    Label = "Empresa 1"
                },
                new EnterpriseDto()
                {
                    Id = 3,
                    Label = "Empresa 2"
                }
            };

            return new Response<IEnumerable<EnterpriseDto>>(enterprise.AsEnumerable());
        }
    }
}
