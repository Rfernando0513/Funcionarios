import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent {
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null= null;

  funcionarioForm!: FormGroup;
  ativo: number = 1;

  constructor(private funcionarioService : FuncionarioService, private router: Router){

  }

  ngOnInit(): void {
    console.log(this.dadosFuncionario?.ativo);

    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', [Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '', [Validators.required]),
      departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento : '', [Validators.required]),
      turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno : '', [Validators.required]),
      ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo : true),
      dataDeCriacao: new FormControl(new Date()),
      dataAlteracao: new FormControl(new Date())
    })
  }

  get nome(){
    return this.funcionarioForm.get('nome')!;
  }

  submit(){
    console.log(this.funcionarioForm.value)

    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
