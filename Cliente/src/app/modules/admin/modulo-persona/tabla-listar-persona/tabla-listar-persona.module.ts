import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaListarPersonaRoutingModule } from './tabla-listar-persona-routing.module';
import { TablaListarPersonaComponent } from './tabla-listar-persona.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TablaListarPersonaComponent
  ],
  imports: [
    CommonModule,
    TablaListarPersonaRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TablaListarPersonaModule { }
