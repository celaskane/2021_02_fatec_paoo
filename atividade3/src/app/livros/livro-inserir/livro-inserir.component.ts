import { Component, EventEmitter, Output } from "@angular/core"
import { NgForm } from "@angular/forms";
import { Livro } from "../livro.model";

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css'],
})
export class LivroInserirComponent{
  @Output() livroAdicionado = new EventEmitter<Livro>();
  id: string;
  titulo: string;
  autor: string;
  paginas: string;
  onAdicionarLivro(form: NgForm) {
    //console.log('Inserindo livro...');
    if(form.invalid){
      return;
    }
    const livro: Livro = {
      id: form.value.id,
      titulo: form.value.titulo,
      autor: form.value.autor,
      paginas: form.value.paginas,
    };
    this.livroAdicionado.emit(livro);
  }
}
