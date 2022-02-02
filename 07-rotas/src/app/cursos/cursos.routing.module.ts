import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'cursos/not-found', component: CursoNaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
