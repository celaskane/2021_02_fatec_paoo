import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent{

  pessoas = [
    { nome: "José", idade: 18 },
    { nome: "Maria", idade: 22 }
  ];
  /*adicionar(nome: any, idade: any) {
    this.pessoas = [{ nome: nome, idade: idade }, ...this.pessoas];
  }*/

  @Output() pessoaAdicionada = new EventEmitter();

  adicionar(nome: any, idade: any) {
    const pessoa = {
    nome: nome,
    idade: idade
    };
    this.pessoaAdicionada.emit(pessoa);
    }   

}
