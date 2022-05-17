import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaListarTipoPersonaComponent } from './tabla-listar-tipo-persona.component';

const routes: Routes = [
  { path: '', component: TablaListarTipoPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaListarTipoPersonaRoutingModule { }
