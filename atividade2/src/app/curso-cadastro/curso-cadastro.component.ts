import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent{

  cursos = [
    { nome: "Java", cargaHoraria: 40 },
    { nome: "Python", cargaHoraria: 60 }
  ];
  /*adicionar(nome: any, idade: any) {
    this.pessoas = [{ nome: nome, idade: idade }, ...this.pessoas];
  }*/

  @Output() cursoAdicionado = new EventEmitter();

  adicionar(nome: any, cargaHoraria: any) {
    const curso = {
      nome: nome,
      cargaHoraria: cargaHoraria
    };
    this.cursoAdicionado.emit(curso);
  }   

}
