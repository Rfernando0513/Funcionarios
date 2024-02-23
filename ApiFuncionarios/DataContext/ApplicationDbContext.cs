using Microsoft.EntityFrameworkCore;
using ApiFuncionarios.Models;

namespace ApiFuncionarios.DataContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<FuncionarioModel> Funcionarios {get; set;}
    }
}
