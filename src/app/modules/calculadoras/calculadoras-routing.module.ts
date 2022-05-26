import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaudalComponent } from './caudal/caudal.component';
import { FertilizacionComponent } from './fertilizacion/fertilizacion.component';
import { FertirriegoComponent } from './fertirriego/fertirriego.component';
import { GoteoComponent } from './goteo/goteo.component';
import { GramosrequeridosComponent } from './gramosrequeridos/gramosrequeridos.component';
import { InitComponent } from './init/init.component';
import { SustratoComponent } from './sustrato/sustrato.component';

const routes: Routes = [
  { path: '', component: InitComponent, },
  { path: 'caudal', component: CaudalComponent, },
  { path: 'fertilizacion', component: FertilizacionComponent, },
  { path: 'fertirriego', component: FertirriegoComponent, },
  { path: 'goteo', component: GoteoComponent, },
  { path: 'sustrato', component: SustratoComponent, },
  { path: 'gramos-requeridos', component: GramosrequeridosComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadorasRoutingModule { }
