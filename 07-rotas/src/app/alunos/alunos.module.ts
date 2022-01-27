import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [AlunosComponent, AlunosFormComponent, AlunoDetalheComponent],
  providers: [],
})
export class AlunosModule {}
