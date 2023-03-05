import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  declarations: [TemplateFormComponent],
  imports: [SharedModule, FormsModule, HttpClientModule],
  exports: [],
  providers: [],
})
export class TemplateFormModule {}
