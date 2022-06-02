import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-goteo',
  templateUrl: './goteo.component.html',
  styleUrls: ['./goteo.component.css']
})
export class GoteoComponent implements OnInit {

  
  form = new FormGroup({
    valor1: new FormControl('',
      [
        Validators.required,
        Validators.max(4000),
        Validators.min(100)
      ]),
    valor2: new FormControl('',
      [
        Validators.required,
        Validators.max(1000),
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
    this.errorMsg = []

    if (this.form.get('valor1')?.value > 4000 || this.form.get('valor1')?.value < 100 )
      this.errorMsg.push("La cantidad de gramos del elemento debe ser un valor entre 100 g y 4000 g")

    if (this.form.get('valor2')?.value > 10 || this.form.get('valor2')?.value < 1000)
      this.errorMsg.push("La cantidad de litro necesarios debe ser un valor entre 10 L y 1000 L")


    if (this.form.invalid) {
      this.formHasErrors = true;
      return
    }

    this.formHasErrors = false;
    this.result = (this.form.get('valor1')?.value * this.form.get('valor2')?.value)
    this.isResult = true;
  }


}
