import { Component, OnInit } from '@angular/core';

import { ServicioPersonaService } from 'app/services/servicio-persona.service';
import { InterfacePersona } from 'app/interfaces/interface-persona';
import { InterfaceCurso } from 'app/interfaces/interface-curso';
import { InterfaceTipoPersona } from 'app/interfaces/interface-tipo-persona';
import { Router, ActivatedRoute } from '@angular/router';

import { ClaseMensajes } from 'app/interfaces/clase-mensajes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-actualizar-persona',
  templateUrl: './form-actualizar-persona.component.html',
  styleUrls: ['./form-actualizar-persona.component.scss']
})
export class FormActualizarPersonaComponent implements OnInit {

  persona: InterfacePersona = {
    _id: '',
    nombrePersona: '',
    apellido_paterno: '',
    apellido_materno: '',
    genero: '',
    fecha_nacimiento: '',
    ci: '',
    email: '',
    celular: '',
    direccion_domicilio: '',
    foto: '',
    cursoID: '',
    tipo_personaID: '',
  }

  lista_combo_box_curso: InterfaceCurso[];
  lista_combo_box_tipo_persona: InterfaceTipoPersona[];

  mensaje: any;

  constructor(private servicio_persona: ServicioPersonaService, private router: Router, private location: Location, private activated_router: ActivatedRoute) 
  { 
    this.lista_combo_box_curso = [];
    this.lista_combo_box_tipo_persona = [];
    this.mensaje = new ClaseMensajes(this.router);
  }

  ngOnInit(): void { 
  
    const id_entrante = this.activated_router.snapshot.params['id'];
    if(id_entrante)
    {
      this.listarCursosComboBox();
      this.listarTipoPersonaComboBox();
      this.servicio_persona.getUnaPersona(id_entrante).subscribe(
        res => {
          console.log(res)
          this.persona = res;
        },
        err => console.log(err)
      );
    }
  }

  //llenado del combo box para seleccionar curso
  listarCursosComboBox()
  {
    const id_curso_lista = this.activated_router.snapshot.params['idcurso'];

    this.servicio_persona.getCursoComboBox(id_curso_lista).subscribe(
      res => {
        console.log(res);
        this.lista_combo_box_curso = <any>res;
      },
      err => console.log(err)
    );
  }

  listarTipoPersonaComboBox()
  {
    this.servicio_persona.getTipoPersonaComboBox().subscribe(
      res => {
        console.log(res);
        this.lista_combo_box_tipo_persona = <any>res;
      },
      err => console.log(err)
    );
  }

  actualizarPersona()
  {
    const id_curso_entrante = this.activated_router.snapshot.params['idcurso'];

    this.servicio_persona.editarPersona(this.persona._id, this.persona).subscribe(
      res => {
        this.mensaje.mensajeActualizacionExitoso('/lista-persona/'+id_curso_entrante);
      },
      err => this.mensaje.mensajeError('/lista-persona/'+id_curso_entrante)
    );
  }

  cancelar()
  {
    this.location.back();
  }

}
