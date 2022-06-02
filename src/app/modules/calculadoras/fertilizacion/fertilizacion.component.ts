import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fertilizacion',
  templateUrl: './fertilizacion.component.html',
  styleUrls: ['./fertilizacion.component.css']
})
export class FertilizacionComponent implements OnInit {

  form = new FormGroup({
    gramosRequeridos: new FormControl('',
      [
        Validators.required,
        Validators.max(600000),
        Validators.min(100)
      ]),
    porcentajePureza: new FormControl('',
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


    if (this.form.get('gramosRequeridos')?.value > 600000 || this.form.get('gramosRequeridos')?.value < 100 )
      this.errorMsg.push("Los gramos requeridos deben ser un valor entre 100 gr a 600,000 gr")

    if (this.form.get('porcentajePureza')?.value > 100 || this.form.get('porcentajePureza')?.value < 10)
      this.errorMsg.push("El porcentaje de pureza debe ser un valor entre 10% a 100%")

    if (this.form.invalid) {
      this.formHasErrors = true;
      return
    }


    this.formHasErrors = false;
    this.result = this.form.get('gramosRequeridos')?.value / this.form.get('porcentajePureza')?.value
    this.isResult = true;
  }

}
