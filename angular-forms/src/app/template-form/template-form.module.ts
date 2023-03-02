import { FieldErrorControlComponent } from './../field-error-control/field-error-control.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    FieldErrorControlComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [],
  providers: [],
})
export class TemplateFormModule {}
