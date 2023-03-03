import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormService } from './../template-form/template-form.service';

@NgModule({
  providers: [TemplateFormService],
  imports: [CommonModule],
})
export class CoreModule {}
