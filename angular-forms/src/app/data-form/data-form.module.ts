import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { DataFormComponent } from './data-form.component';

@NgModule({
  declarations: [DataFormComponent],
  imports: [SharedModule, ReactiveFormsModule],
})
export class DataFormModule {}
