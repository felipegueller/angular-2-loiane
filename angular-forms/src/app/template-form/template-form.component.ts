import { TemplateFormService } from './template-form.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  public user = {
    name: null,
    email: null,
  };

  constructor(private templateFormService: TemplateFormService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    console.log(form);
  }

  isAnValidField = (field: NgModel): boolean =>
    (field.valid && (field.touched || field.dirty)) || false;

  isAnInvalidField = (field: NgModel): boolean =>
    (!field.valid && (field.touched || field.dirty)) || false;

  applyValidationFieldCss = (field: NgModel) => ({
    'is-valid': this.isAnValidField(field),
    'is-invalid': this.isAnInvalidField(field),
  });

  populateDataAddress(data: any, form: NgForm): void {
    const {street, complement, neighborhood, federative_units, city} = form.value.endereco
    console.log(data)
    console.log(form)

    form['form'].patchValue({
      endereco: {
        street: data['logradouro'] || street,
        complement: data['complemento'] || complement,
        neighborhood: data['bairro'] || neighborhood,
        federative_units: data['uf'] || federative_units,
        city: data['localidade'] || city
      }
    })
  }

  searchCep = (event: FocusEvent, form: NgForm): void => {
    const cep: string = (event.target as HTMLInputElement).value;
    if (!cep) return;

    const nonNumericDigits = /\D/g;
    const formatedCep = nonNumericDigits.test(cep)
      ? cep.replace(nonNumericDigits, '')
      : cep;

    const hasEightDigits = /^[0-9]{8}$/;
    if (!hasEightDigits.test(formatedCep)) return;

    this.templateFormService
      .searchCep(formatedCep)
      .subscribe((resp) => this.populateDataAddress(resp, form));
  };
}
