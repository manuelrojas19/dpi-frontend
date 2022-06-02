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
        Validators.min(1)
      ]),
    valor2: new FormControl('',
      [
        Validators.required,
        Validators.max(100),
        Validators.min(1)
      ])
  });

  formHasErrors: boolean = false;
  isResult: boolean = false;
  result = 0;


  errorMsg: String[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get controls() {
    return this.form.controls;
  }


  onSubmit(): void {
    this.isResult = false;
    this.errorMsg = []

    if (this.form.get('valor1')?.value > 1 || this.form.get('valor1')?.value < 100 )
      this.errorMsg.push("La capacidad del tanque debe ser un valor entre 1L y 100L")

    if (this.form.get('valor2')?.value > 10000 || this.form.get('valor2')?.value < 100)
      this.errorMsg.push("La cantidad de litros necesarios debe ser un valor entre 1L y 100L")


    if (this.form.invalid) {
      this.formHasErrors = true;
      return
    }

    this.formHasErrors = false;
    this.result = (this.form.get('valor1')?.value / this.form.get('valor2')?.value)
    this.isResult = true;
  }

}
