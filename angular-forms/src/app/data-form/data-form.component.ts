import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TemplateFormService } from './../template-form/template-form.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private templateFormService: TemplateFormService
  ) {}

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });

    // [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
  }

  onSubmit() {
    console.log(this.reactiveForm);
    // this.reactiveForm.reset()
  }
}
