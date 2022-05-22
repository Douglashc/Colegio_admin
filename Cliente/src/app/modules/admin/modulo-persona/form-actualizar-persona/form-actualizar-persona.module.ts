import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormActualizarPersonaRoutingModule } from './form-actualizar-persona-routing.module';
import { FormActualizarPersonaComponent } from './form-actualizar-persona.component';


@NgModule({
  declarations: [
    FormActualizarPersonaComponent
  ],
  imports: [
    CommonModule,
    FormActualizarPersonaRoutingModule
  ]
})
export class FormActualizarPersonaModule { }
