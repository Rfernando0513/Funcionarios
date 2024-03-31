import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';
import { log } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  Funcionarios: Funcionario[] = [];
  FuncionarioGeral: Funcionario[] = [];

  constructor( private funcionarioService: FuncionarioService){}

  ngOnInit(): void{
    this.funcionarioService.GetFuncionarios().subscribe(data =>{
      const dados = data.dados;

      dados.map((item) =>{
        item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR')
        item.dataAlteracao = new Date(item.dataAlteracao!).toLocaleDateString('pt-BR')
      })

      this.Funcionarios = data.dados;
      this.FuncionarioGeral = data.dados;
    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.Funcionarios = this.FuncionarioGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }
}
