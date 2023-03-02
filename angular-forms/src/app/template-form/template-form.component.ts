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

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    console.log(form);
  }

  isAnValidField = (field: NgModel) =>
    field.valid && (field.touched || field.dirty);

  isAnInvalidField = (field: NgModel) =>
    !field.valid && (field.touched || field.dirty);

  applyValidationFieldCss = (field: NgModel) => ({
    'is-valid': this.isAnValidField(field),
    'is-invalid': this.isAnInvalidField(field),
  });
}
