import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioFormComponent } from '../../components/funcionario-form/funcionario-form.component';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FuncionarioFormComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})

export class EditarComponent implements OnInit{

  btnAcao = "Editar";
  btnTitulo = "Editar Funcionário!";
  funcionario!: Funcionario;

  constructor(private funcionarioService : FuncionarioService, private router :Router,  private route : ActivatedRoute) {


  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
        if (data.dados && data.dados.length > 0) {
            this.funcionario = data.dados[0];
        }
    });
}


  async editFuncionario(funcionario : Funcionario){

      this.funcionarioService.EditFuncionario(funcionario).subscribe(data => {
        this.router.navigate(['/']);
      });

  }

}