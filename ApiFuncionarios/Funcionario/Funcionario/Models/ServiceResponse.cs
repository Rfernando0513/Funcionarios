namespace Funcionario.Models
{
    public class ServiceResponse<T>
    {
        public T? Dados { get; set; }
        public string Menssagem { get; set; } = string.Empty;
        public bool Sucesso { get; set; } = true;
    }
}
