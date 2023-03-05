import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      name: [null],
      email: [null],
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
    // this.reactiveForm.reset()
  }
}
