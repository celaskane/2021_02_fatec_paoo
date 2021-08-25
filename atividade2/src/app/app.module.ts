import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoCartaoComponent,
    CursoCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }