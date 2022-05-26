import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './modules/calculadoras/init/init.component';

const routes: Routes = [
  {
    path: 'calculadoras',
    loadChildren: () => import('./modules/calculadoras/calculadoras.module')
      .then(mod => mod.CalculadorasModule),
  },
  {
    path: '',
    component: InitComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
