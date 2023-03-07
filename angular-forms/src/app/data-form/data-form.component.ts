import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  isAnValidField = (controlName: string): boolean => {
    const field: AbstractControl = this.reactiveForm.controls[controlName];
    return (field.valid && (field.touched || field.dirty)) || false;
  };

  isAnInvalidField = (controlName: string): boolean => {
    const field: AbstractControl | null = this.reactiveForm.get(controlName);

    return field ? !field.valid && (field.touched || field.dirty) : false;
  };

  applyValidationFieldCss = (controlName: string) => ({
    'is-valid': this.isAnValidField(controlName),
    'is-invalid': this.isAnInvalidField(controlName),
  });
}
