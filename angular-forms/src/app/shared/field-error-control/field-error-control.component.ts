import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error-control',
  templateUrl: './field-error-control.component.html',
  styleUrls: ['./field-error-control.component.css']
})
export class FieldErrorControlComponent {
  @Input() showError: boolean = false;
  @Input() errorMessage: string = ''

  constructor() {}
}
