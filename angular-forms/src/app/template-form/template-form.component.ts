import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  public user = {
    name: 'Felipe Gueller',
    email: 'nonbindabble@javamail.com'
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    console.log(this.user)
  }
}
