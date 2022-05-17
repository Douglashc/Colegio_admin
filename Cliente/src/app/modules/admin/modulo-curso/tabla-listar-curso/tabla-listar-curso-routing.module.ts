import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaListarCursoComponent } from './tabla-listar-curso.component';

const routes: Routes = [
  { path: '', component: TablaListarCursoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaListarCursoRoutingModule { }
