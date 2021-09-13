import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  /*livros = [
    {
      id: '123',
      titulo: 'abc',
      autor: 'eu',
      paginas: '100',
    },
    {
      id: '234',
      titulo: 'def',
      autor: 'tu',
      paginas: '300',
    }
  ];*/
  @Input() livros: Livro[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
