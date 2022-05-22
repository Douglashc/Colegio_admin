import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormActualizarPersonaComponent } from './form-actualizar-persona.component';

const routes: Routes = [
  { path: '', component: FormActualizarPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormActualizarPersonaRoutingModule { }
