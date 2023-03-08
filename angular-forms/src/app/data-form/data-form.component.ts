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

  getControl = (controlName: string): AbstractControl | null =>
    this.reactiveForm.get(controlName);

  isAnValidField = (controlName: string): boolean => {
    const field: AbstractControl | null = this.getControl(controlName)
    return (field?.valid && field?.touched) || false;
  };

  isAnInvalidField = (controlName: string): boolean => {
    const field: AbstractControl | null = this.getControl(controlName)

    return (!field?.valid && field?.touched) || false;
  };

  applyValidationFieldCss = (controlName: string) => ({
    'is-valid': this.isAnValidField(controlName),
    'is-invalid': this.isAnInvalidField(controlName),
  });

  errosMap(error: string): string {
    const errorsMap = {
      required: 'Preenchimento obrigatório!',
      email: 'E-mail inválido!',
    };
    const objectAcessExpression = error as keyof typeof errorsMap;

    return errorsMap[objectAcessExpression]
      ? errorsMap[objectAcessExpression]
      : '';
  }

  getErrorMessage = (keys: string[]): string =>
    keys.reduce((acc: string, key: string, index: number, arr: string[]) => {
      const isLastElement = arr.length - 1 === index;

      return isLastElement
        ? `${acc}${this.errosMap(key)}\n`
        : `${acc}$${this.errosMap(key)}`;
    }, '');

  generateErrorMessage(controlName: string): string {
    const formField: AbstractControl | null = this.getControl(controlName)

    if (!formField || formField?.errors === null) return '';

    const { errors } = formField;
    const errorKeys = Object.getOwnPropertyNames(errors);
    return this.getErrorMessage(errorKeys);
  }
}
