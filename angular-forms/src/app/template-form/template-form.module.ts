import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormComponent } from './template-form.component';
import { FieldErrorControlComponent } from './../field-error-control/field-error-control.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    FieldErrorControlComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [],
  providers: [],
})
export class TemplateFormModule {}
