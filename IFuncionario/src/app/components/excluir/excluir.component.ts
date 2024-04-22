import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent  implements OnInit{

  inputdata: any
  funcionario!: Funcionario;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private funcionarioService: FuncionarioService, private router: Router, private ref:MatDialogRef<ExcluirComponent>){}

    ngOnInit(): void{
      this.inputdata = this.data;

      this.funcionarioService.GetFuncionario(this.inputdata.id).subscribe(data => {
        this.funcionario = data.dados;
      });
    }

    excluir(){
      this.funcionarioService.ExcluirFuncionario(this.inputdata).subscribe(data => {
        this.ref();
        window.location.reload();
      });
    }
}
