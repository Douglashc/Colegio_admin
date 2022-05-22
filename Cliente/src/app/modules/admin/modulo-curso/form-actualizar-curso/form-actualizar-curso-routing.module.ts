import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormActualizarCursoComponent } from './form-actualizar-curso.component';

const routes: Routes = [
  { path: '', component: FormActualizarCursoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormActualizarCursoRoutingModule { }
