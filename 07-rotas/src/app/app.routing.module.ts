import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'cursos',
    loadChildren: () => {
      return import('./cursos/cursos.module').then((m) => m.CursosModule);
    },
  },
  {
    path: 'alunos',
    loadChildren: () => {
      return import('./alunos/alunos.module').then((m) => m.AlunosModule);
    },
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
