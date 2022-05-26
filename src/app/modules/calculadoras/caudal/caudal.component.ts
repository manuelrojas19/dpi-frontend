import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-caudal',
  templateUrl: './caudal.component.html',
  styleUrls: ['./caudal.component.css']
})
export class CaudalComponent implements OnInit {

  
  form = new FormGroup({
    valor1: new FormControl('',
      [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ]),
    valor2: new FormControl('',
      [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ])
  });

  formHasErrors: boolean = false;
  isResult: boolean = false;
  result = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get controls() {
    return this.form.controls;
  }


  onSubmit(): void {
    this.isResult = false;

    if (this.form.invalid) {
      this.formHasErrors = true;
      return
    }

    this.formHasErrors = false;
    this.result = (this.form.get('valor1')?.value / this.form.get('valor2')?.value)
    this.isResult = true;
  }

}
