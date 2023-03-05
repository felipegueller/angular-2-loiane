import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      name: [null],
      email: [null]
    })
  }
}
