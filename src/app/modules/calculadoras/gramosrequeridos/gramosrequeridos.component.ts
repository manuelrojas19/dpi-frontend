import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gramosrequeridos',
  templateUrl: './gramosrequeridos.component.html',
  styleUrls: ['./gramosrequeridos.component.css']
})
export class GramosrequeridosComponent implements OnInit {


  form = new FormGroup({
    valor1: new FormControl('',
      [
        Validators.required,
        Validators.max(6000),
        Validators.min(100)
      ]),
    valor2: new FormControl('',
      [
        Validators.required,
        Validators.max(6000),
        Validators.min(100)
      ]),
    valor3: new FormControl('',
      [
        Validators.required,
        Validators.max(100),
        Validators.min(10)
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

    this.errorMsg = [];

    if (this.form.get('valor1')?.value > 6000 || this.form.get('valor1')?.value < 100)
      this.errorMsg.push("La cantidad de nutriente en el producto debe ser un valor entre 100 gr a 6000 gr")

    if (this.form.get('valor2')?.value > 6000 || this.form.get('valor2')?.value < 100)
      this.errorMsg.push("La cantidad de nutriente requerida debe ser un valor entre 100 gr a 6000 gr")


    if (this.form.get('valor3')?.value > 100 || this.form.get('valor3')?.value < 10)
      this.errorMsg.push("El porcentaje de eficacia debe ser un valor entre 10% a 100%")

    if (this.form.invalid) {
      this.formHasErrors = true;
      return
    }

    this.formHasErrors = false;
    this.result = (this.form.get('valor1')?.value * this.form.get('valor2')?.value) / this.form.get('valor3')?.value
    this.isResult = true;
  }

}
