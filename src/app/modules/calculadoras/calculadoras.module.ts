import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadorasRoutingModule } from './calculadoras-routing.module';
import { FertilizacionComponent } from './fertilizacion/fertilizacion.component';
import { FertirriegoComponent } from './fertirriego/fertirriego.component';
import { CaudalComponent } from './caudal/caudal.component';
import { GoteoComponent } from './goteo/goteo.component';
import { SustratoComponent } from './sustrato/sustrato.component';
import { InitComponent } from './init/init.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { GramosrequeridosComponent } from './gramosrequeridos/gramosrequeridos.component';


@NgModule({
  declarations: [
    FertilizacionComponent,
    FertirriegoComponent,
    CaudalComponent,
    GoteoComponent,
    SustratoComponent,
    InitComponent,
    GramosrequeridosComponent,
  ],
  imports: [
    CommonModule,
    CalculadorasRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CalculadorasModule { }
