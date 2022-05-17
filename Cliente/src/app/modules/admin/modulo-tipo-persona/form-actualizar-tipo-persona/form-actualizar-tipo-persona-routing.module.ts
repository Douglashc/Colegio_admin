import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormActualizarTipoPersonaComponent } from './form-actualizar-tipo-persona.component';

const routes: Routes = [
  { path: '', component: FormActualizarTipoPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormActualizarTipoPersonaRoutingModule { }
