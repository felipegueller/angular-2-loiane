import { FederativeStateBr } from './../models/federative-state-br';
import { DropdownService } from './../core/dropdown/dropdown.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Observable } from 'rxjs';

import { TemplateFormService } from './../template-form/template-form.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  federativeStatesBr: Observable<FederativeStateBr[]>;

  constructor(
    private formBuilder: FormBuilder,
    private templateFormService: TemplateFormService,
    private dropDownService: DropdownService
  ) {
    this.federativeStatesBr = this.dropDownService.getFederativeStateBr()
  }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        cep: [null, [Validators.required]],
        number: [null, [Validators.required]],
        complement: [null],
        street: [null, [Validators.required]],
        neighborhood: [null, [Validators.required]],
        city: [null, [Validators.required]],
        federative_unit: [null, [Validators.required]],
      }),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);

    if (!this.reactiveForm.valid) this.verifyFormValidations(this.reactiveForm);
  }

  verifyFormValidations(group: FormGroup) {
    const controls = group.controls;
    const controlKeys = Object.keys(controls);

    controlKeys.forEach((key: string) => {
      // Força a validação do campo de formulário
      controls[key].markAllAsTouched();

      if (controls[key] instanceof FormGroup)
        this.verifyFormValidations(controls[key] as FormGroup);
    });
  }

  getControl = (controlName: string): AbstractControl | null =>
    this.reactiveForm.get(controlName);

  isAnValidField = (controlName: string): boolean => {
    const field: AbstractControl | null = this.getControl(controlName);
    return (field?.valid && field?.touched) || false;
  };

  isAnInvalidField = (controlName: string): boolean => {
    const field: AbstractControl | null = this.getControl(controlName);

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
        ? `${acc}${this.errosMap(key)}`
        : `${acc}${this.errosMap(key)}\n`;
    }, '');

  generateErrorMessage(controlName: string): string {
    const formField: AbstractControl | null = this.getControl(controlName);

    if (!formField || formField?.errors === null) return '';

    const { errors } = formField;
    const errorKeys = Object.getOwnPropertyNames(errors);
    return this.getErrorMessage(errorKeys);
  }

  populateDataAddress(data: any): void {
    const { street, complement, neighborhood, federative_unit, city } = (
      this.reactiveForm.get('address') as FormGroup
    )?.controls;

    this.reactiveForm.patchValue({
      address: {
        street: data['logradouro'] || street.value,
        complement: data['complemento'] || complement.value,
        neighborhood: data['bairro'] || neighborhood.value,
        federative_unit: data['uf'] || federative_unit.value,
        city: data['localidade'] || city.value,
      },
    });

    this.reactiveForm.get('name')?.setValue('Fulano de tal');
  }

  searchCep = (): void => {
    const cep: string | null = this.getControl('address.cep')?.value;
    if (!cep) return;

    const nonNumericDigits = /\D/g; // regex to find any character different of number
    const formatedCep = nonNumericDigits.test(cep)
      ? cep.replace(nonNumericDigits, '')
      : cep;

    const hasEightDigits = /^[0-9]{8}$/;
    if (!hasEightDigits.test(formatedCep)) return;

    this.templateFormService
      .searchCep(formatedCep)
      .subscribe((resp) => this.populateDataAddress(resp));
  };
}
