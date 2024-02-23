using ApiFuncionarios.Models;

namespace ApiFuncionarios.Service.FuncionarioService
{
    public interface IFuncionarioService
    {
        Task<ServiceResponse<List<FuncionarioModel>>> GetFuncionario();
        Task<ServiceResponse<List<FuncionarioModel>>> CreateFuncionario(FuncionarioModel  newFuncionario);
        Task<ServiceResponse<FuncionarioModel>> GetFuncionarioById(int id);
        Task<ServiceResponse<List<FuncionarioModel>>> UpdateFuncionario(FuncionarioModel editadoFuncionario);
        Task<ServiceResponse<List<FuncionarioModel>>> DeleteFuncionario(int id);
        Task<ServiceResponse<List<FuncionarioModel>>> InativaFuncionario(int id);
    }
}
