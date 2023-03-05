import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { FieldErrorControlComponent } from './field-error-control/field-error-control.component';

@NgModule({
  declarations: [FormDebugComponent, FieldErrorControlComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormDebugComponent, FieldErrorControlComponent],
})
export class SharedModule {}
