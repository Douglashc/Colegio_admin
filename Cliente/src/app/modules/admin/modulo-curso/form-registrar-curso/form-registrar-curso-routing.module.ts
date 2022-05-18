import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormRegistrarCursoComponent } from './form-registrar-curso.component';

const routes: Routes = [
  { path: '', component: FormRegistrarCursoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRegistrarCursoRoutingModule { }
