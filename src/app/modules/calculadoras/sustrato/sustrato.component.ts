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
        Validators.max(6000),
        Validators.min(100)
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
    this.result = (this.form.get('valor1')?.value * this.form.get('valor2')?.value) 
  }

}
