import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormRegistrarPersonaComponent } from './form-registrar-persona.component';

const routes: Routes = [
  { path: '', component: FormRegistrarPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRegistrarPersonaRoutingModule { }
