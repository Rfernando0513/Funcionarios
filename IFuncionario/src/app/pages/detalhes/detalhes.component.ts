import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  funcionario?: Funcionario;
  id!:number;

 constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router : Router) {

 }

 ngOnInit(): void {

  this.id =  Number(this.route.snapshot.paramMap.get("id"));

  this.funcionarioService.GetFuncionario(this.id).subscribe((data) => {
     if(data.dados){
         const dados = data.dados[0];
         dados.dataCriacao = new Date(dados.dataCriacao!).toLocaleDateString("pt-BR");
         dados.dataAlteracao = new Date(dados.dataAlteracao!).toLocaleDateString("pt-BR");

         this.funcionario = dados;
     }
  });
 }}
