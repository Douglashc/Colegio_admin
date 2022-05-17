import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaListarColegioRoutingModule } from './tabla-listar-colegio-routing.module';
import { TablaListarColegioComponent } from './tabla-listar-colegio.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TablaListarColegioComponent
  ],
  imports: [
    CommonModule,
    TablaListarColegioRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TablaListarColegioModule { }
