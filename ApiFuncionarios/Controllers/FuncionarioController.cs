using ApiFuncionarios.Models;
using ApiFuncionarios.Service.FuncionarioService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiFuncionarios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        private readonly IFuncionarioService _ifuncionarioService;
        public FuncionarioController(IFuncionarioService funcionarioService)
        {
            _ifuncionarioService = funcionarioService;
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<FuncionarioModel>>>> GetFuncionario()
        {
            return Ok(await _ifuncionarioService.GetFuncionario());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<FuncionarioModel>>> GetFuncionarioById(int id )
        {
            ServiceResponse<FuncionarioModel> serviceResponse = await _ifuncionarioService.GetFuncionarioById(id);
            return Ok(serviceResponse);
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<FuncionarioModel>>>> CreateFuncionario(FuncionarioModel newFuncionario)
        {
            return Ok(await _ifuncionarioService.CreateFuncionario(newFuncionario));
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<FuncionarioModel>>>> UpdateFuncionario(FuncionarioModel editadoFuncionario)
        {
            ServiceResponse<List<FuncionarioModel>> serviceResponse = await _ifuncionarioService.UpdateFuncionario(editadoFuncionario);

            return Ok(serviceResponse);
        }

        [HttpPut("InativaFuncionario")]
        public async Task<ActionResult<ServiceResponse<List<FuncionarioModel>>>> InativaFuncionario(int id)
        {
            ServiceResponse<List<FuncionarioModel>> funcionario = await _ifuncionarioService.InativaFuncionario(id);

            return Ok(funcionario);
        } 
        
        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<List<FuncionarioModel>>>> DeleteFuncionario(int id)
        {
            ServiceResponse<List<FuncionarioModel>> funcionario = await _ifuncionarioService.DeleteFuncionario(id);

            return Ok(funcionario);
        } 
       
    }
}
