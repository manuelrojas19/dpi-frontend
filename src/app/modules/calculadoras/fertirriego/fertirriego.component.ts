import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fertirriego',
  templateUrl: './fertirriego.component.html',
  styleUrls: ['./fertirriego.component.css']
})
export class FertirriegoComponent implements OnInit {

  
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
        Validators.max(10000),
        Validators.min(100)
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

    if (this.form.get('valor1')?.value > 6000 || this.form.get('valor1')?.value < 100 )
      this.errorMsg.push("El número de plantas debe ser un valor entre 100 y 6000")

    if (this.form.get('valor2')?.value > 10000 || this.form.get('valor2')?.value < 100)
      this.errorMsg.push("El volumen de agua por planta debe ser un valor de 100 ml a 10,000 ml")

    if (this.form.invalid) {
      this.formHasErrors = true;
      return
    }

    this.formHasErrors = false;
    this.result = (this.form.get('valor1')?.value / this.form.get('valor2')?.value)
    this.isResult = true;
  }

}
