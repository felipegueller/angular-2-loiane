import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AlunosRoutingModule, FormsModule],
  exports: [],
  declarations: [AlunosComponent, AlunosFormComponent, AlunoDetalheComponent],
  providers: [AlunosService],
})
export class AlunosModule {}
