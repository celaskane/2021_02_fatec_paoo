import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  esconder = false
  textoBotao = 'Esconder'
  cursos=[
    {nome: 'Java', cargaHoraria: 40},
    {nome: 'Python', cargaHoraria: 60},
    {nome: 'C#', cargaHoraria: 30}
  ]
  alterarExibicao(){
    this.textoBotao = this.esconder ? "Exibir" : "Esconder"
    this.esconder = !this.esconder
  }

  onAdicionarCurso (curso: any){
    this.cursos = [curso, ...this.cursos]
  }
}