import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaListarColegioComponent } from './tabla-listar-colegio.component';

const routes: Routes = [
  { path: '', component: TablaListarColegioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaListarColegioRoutingModule { }
