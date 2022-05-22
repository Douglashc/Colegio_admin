import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaListarPersonaComponent } from './tabla-listar-persona.component';

const routes: Routes = [
  { path: '', component: TablaListarPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaListarPersonaRoutingModule { }
