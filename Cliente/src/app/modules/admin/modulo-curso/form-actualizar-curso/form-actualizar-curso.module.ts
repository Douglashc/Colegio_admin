import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormActualizarCursoRoutingModule } from './form-actualizar-curso-routing.module';
import { FormActualizarCursoComponent } from './form-actualizar-curso.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    FormActualizarCursoComponent
  ],
  imports: [
    CommonModule,
    FormActualizarCursoRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    SharedModule
  ]
})
export class FormActualizarCursoModule { }
