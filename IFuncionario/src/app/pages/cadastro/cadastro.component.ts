import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from 'express';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  btnAcao = "Cadastrar!";
  btnTitulo = "Cadastrar Funcionario";

  constructor(private funcionarioService : FuncionarioService, private router: Router){
  }

  ngOnInit(): void {
    
  }

  CreateFuncionario(funcionario: Funcionario){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }
}
