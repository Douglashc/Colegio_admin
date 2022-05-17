import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormRegistrarColegioComponent } from './form-registrar-colegio.component';

const routes: Routes = [
  { path: '', component: FormRegistrarColegioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRegistrarColegioRoutingModule { }
