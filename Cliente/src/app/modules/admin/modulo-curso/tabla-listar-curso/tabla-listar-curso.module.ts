import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaListarCursoRoutingModule } from './tabla-listar-curso-routing.module';
import { TablaListarCursoComponent } from './tabla-listar-curso.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TablaListarCursoComponent
  ],
  imports: [
    CommonModule,
    TablaListarCursoRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TablaListarCursoModule { }
