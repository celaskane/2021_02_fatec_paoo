import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  esconder = false
  textoBotao = 'Esconder'
  pessoas=[
    {nome: 'José', idade: 18},
    {nome: 'Maria', idade: 19},
    {nome: 'Gzus', idade: 30}
  ]
  alterarExibicao(){
    this.textoBotao = this.esconder ? "Exibir" : "Esconder"
    this.esconder = !this.esconder
  }

  onAdicionarPessoa (pessoa: any){
    this.pessoas = [pessoa, ...this.pessoas]
  }
}