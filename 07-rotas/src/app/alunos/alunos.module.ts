import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [AlunosComponent, AlunosFormComponent],
  providers: [],
})
export class AlunosModule {}
