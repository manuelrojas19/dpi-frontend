import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sustrato',
  templateUrl: './sustrato.component.html',
  styleUrls: ['./sustrato.component.css']
})
export class SustratoComponent implements OnInit {


  form = new FormGroup({
    valor1: new FormControl('',
      [
        Validators.required,
        Validators.max(100),
        Validators.min(10)
      ]),
    valor2: new FormControl('',
      [
        Validators.required,
        Validators.max(6000),
        Validators.min(10)
      ]),
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

    if (this.form.get('valor1')?.value > 100 || this.form.get('valor1')?.value < 10 )
      this.errorMsg.push("El número de plantas debe ser un valor entre 100 y 10")

    if (this.form.get('valor2')?.value > 1000 || this.form.get('valor2')?.value < 10)
      this.errorMsg.push("La capacidad del contenedor debe ser un valor entre 10L y 1000L")

    if (this.form.invalid) {
      this.formHasErrors = true;
      return
    }

    this.formHasErrors = false;
    this.result = (this.form.get('valor1')?.value * this.form.get('valor2')?.value) 
    this.isResult = true;
  }

}
