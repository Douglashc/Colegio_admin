import { Component, OnInit } from '@angular/core';

import { ServicioPersonaService } from 'app/services/servicio-persona.service';
import { InterfacePersona } from 'app/interfaces/interface-persona';
import { InterfaceCurso } from 'app/interfaces/interface-curso';
import { InterfaceTipoPersona } from 'app/interfaces/interface-tipo-persona';
import { Router, ActivatedRoute } from '@angular/router';

import { ClaseMensajes } from 'app/interfaces/clase-mensajes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-registrar-persona',
  templateUrl: './form-registrar-persona.component.html',
  styleUrls: ['./form-registrar-persona.component.scss']
})
export class FormRegistrarPersonaComponent implements OnInit {

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
    this.listarCursosComboBox();
    this.listarTipoPersonaComboBox();
  }

  //llenado del combo box para seleccionar curso
  listarCursosComboBox()
  {
    const id_entrante = this.activated_router.snapshot.params['id'];

    this.servicio_persona.getCursoComboBox(id_entrante).subscribe(
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

  //Registro de nueva persona
  agregarPersona()
  {
    delete this.persona._id;
    const id_entrante2 = this.activated_router.snapshot.params['id'];

    this.servicio_persona.aniadirPersona(this.persona).subscribe(
      res => {
        this.mensaje.mensajeRegistroExitoso('/lista-persona/'+id_entrante2);
      },
      err => this.mensaje.mensajeError('/lista-persona/'+id_entrante2)
    )
  }

  //boton cancelar (Se usa para recuperar la vista anterior sin perder datos)
  cancelar()
  {
    this.location.back();
  }

}
