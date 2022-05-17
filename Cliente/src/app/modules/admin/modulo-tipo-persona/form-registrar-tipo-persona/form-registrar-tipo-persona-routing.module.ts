import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormRegistrarTipoPersonaComponent } from './form-registrar-tipo-persona.component';

const routes: Routes = [
  { path: '', component: FormRegistrarTipoPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRegistrarTipoPersonaRoutingModule { }
