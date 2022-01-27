import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const alunosRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
