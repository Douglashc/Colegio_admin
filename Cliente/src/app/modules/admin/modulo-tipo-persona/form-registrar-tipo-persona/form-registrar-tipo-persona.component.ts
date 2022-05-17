import { Component, OnInit } from '@angular/core';

import { ServicioTipoPersonaService } from 'app/services/servicio-tipo-persona.service';
import { InterfaceTipoPersona } from 'app/interfaces/interface-tipo-persona';
import { Router } from '@angular/router';

import { ClaseMensajes } from 'app/interfaces/clase-mensajes';

@Component({
  selector: 'app-form-registrar-tipo-persona',
  templateUrl: './form-registrar-tipo-persona.component.html',
  styleUrls: ['./form-registrar-tipo-persona.component.scss']
})
export class FormRegistrarTipoPersonaComponent implements OnInit {

  tipo_persona:InterfaceTipoPersona = {
    _id: '',
    nombre_tipo_persona: '',
  } 

  mensaje: any;

  constructor(private servicio_tipo_persona: ServicioTipoPersonaService, private router: Router) 
  { 
    this.mensaje = new ClaseMensajes(this.router);
  }

  ngOnInit(): void {
  }

  agregarTipoPersona()
  {
    delete this.tipo_persona._id;

    this.servicio_tipo_persona.aniadirTipoPersona(this.tipo_persona).subscribe(
      res => {
        this.mensaje.mensajeRegistroExitoso('/lista-tipo-persona');
      },
      err => this.mensaje.mensajeError('/lista-tipo-persona')
    );
  }

}
