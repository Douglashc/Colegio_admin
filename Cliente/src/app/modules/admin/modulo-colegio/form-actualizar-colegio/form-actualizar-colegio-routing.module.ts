import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormActualizarColegioComponent } from './form-actualizar-colegio.component';

const routes: Routes = [
  { path: '', component: FormActualizarColegioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormActualizarColegioRoutingModule { }
