import { Component, OnInit } from '@angular/core';

import { ServicioTipoPersonaService } from 'app/services/servicio-tipo-persona.service';
import { InterfaceTipoPersona } from 'app/interfaces/interface-tipo-persona';
import { Router, ActivatedRoute } from '@angular/router';

import { ClaseMensajes } from 'app/interfaces/clase-mensajes';

@Component({
  selector: 'app-form-actualizar-tipo-persona',
  templateUrl: './form-actualizar-tipo-persona.component.html',
  styleUrls: ['./form-actualizar-tipo-persona.component.scss']
})
export class FormActualizarTipoPersonaComponent implements OnInit {

  tipo_persona: InterfaceTipoPersona = {
    _id: '',
    nombre_tipo_persona: ''
  }

  mensaje: any;

  constructor(private servicio_tipo_persona: ServicioTipoPersonaService, private router: Router, private activated_route: ActivatedRoute) 
  { 
    this.mensaje = new ClaseMensajes(this.router);
  }

  ngOnInit(): void {

    const id_entrante = this.activated_route.snapshot.params['id'];

    if(id_entrante)
    {
      this.servicio_tipo_persona.getUnTipoPersona(id_entrante).subscribe(
        res => {
          this.tipo_persona = res;
        },
        err => console.log(err)
      );
    }

  }

  actualizarTipoPersona()
  {
    this.servicio_tipo_persona.editarTipoPersona(this.tipo_persona._id, this.tipo_persona).subscribe(
      res => {
        this.mensaje.mensajeActualizacionExitoso('/lista-tipo-persona');
      },
      err => this.mensaje.mensajeError('/lista-tipo-persona')
    );
  }

}
