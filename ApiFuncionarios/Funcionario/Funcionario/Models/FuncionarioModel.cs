using Funcionario.Enum;
using System.ComponentModel.DataAnnotations;

namespace Funcionario.Models
{
    public class FuncionarioModel
    {
        [Key]
        public int IdFuncionario { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Sobrenome{ get; set; } = string.Empty;
        public DepartamentoEnum Departamento { get; set; }
        public bool Ativo { get; set; }
        public DateTime DataCriacao { get; set; } = DateTime.Now.ToLocalTime();
        public DateTime DataAlteracao { get; set; } = DateTime.Now.ToLocalTime();
    }
}
