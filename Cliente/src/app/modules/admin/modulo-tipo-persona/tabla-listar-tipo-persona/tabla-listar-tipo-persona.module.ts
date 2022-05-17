import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaListarTipoPersonaRoutingModule } from './tabla-listar-tipo-persona-routing.module';
import { TablaListarTipoPersonaComponent } from './tabla-listar-tipo-persona.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TablaListarTipoPersonaComponent
  ],
  imports: [
    CommonModule,
    TablaListarTipoPersonaRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TablaListarTipoPersonaModule { }
