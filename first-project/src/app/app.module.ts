import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MyFirstComponent } from './my-first/my-first.component';
import { MyFirst2Component } from './my-first2/my-first2.component';


/*
  Declarations: é a parte onde são identificados todos os componentes, diretivas e pipes utilizadas pelo modulo.

  Imports: são declarados os modulos que você quer deixar disponível para os componentese deste modulo em questão.

  Providers: nesta parte são declarados todos os serviços que ficaram disponível para o uso dos modulos.

  Bootstrap: Serve para instânciar o primeiro componente a ser renderizado na tela, este componente vai servir de container para os demais componentes.
*/

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirst2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
