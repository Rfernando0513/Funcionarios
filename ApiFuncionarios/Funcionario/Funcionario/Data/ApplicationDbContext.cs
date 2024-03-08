﻿using Funcionario.Models;
using Microsoft.EntityFrameworkCore;

namespace Funcionario.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options)
        {
        }

        public DbSet<FuncionarioModel> Funcionarios { get; set; }
    }
}
