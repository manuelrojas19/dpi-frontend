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
    this.result = this.form.get('gramosRequeridos')?.value / this.form.get('porcentajePureza')?.value
    this.isResult = true;
  }

}
