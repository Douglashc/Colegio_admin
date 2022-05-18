import { Component, OnInit } from '@angular/core';

import { ServicioCursoService } from 'app/services/servicio-curso.service';
import { InterfaceCurso } from 'app/interfaces/interface-curso';
import { InterfaceColegio } from 'app/interfaces/interface-colegio';
import { Router } from '@angular/router';

import { ClaseMensajes } from 'app/interfaces/clase-mensajes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-registrar-curso',
  templateUrl: './form-registrar-curso.component.html',
  styleUrls: ['./form-registrar-curso.component.scss']
})
export class FormRegistrarCursoComponent implements OnInit {

  curso: InterfaceCurso = {
    _id: '',
    nombreCurso: '',
    paralelo: '',
    colegioID: '',
  }

  lista_combo_box_colegio: InterfaceColegio[];

  mensaje: any;

  constructor(private servicio_curso: ServicioCursoService, private router: Router, private location: Location) 
  { 
    this.lista_combo_box_colegio = [];
    this.mensaje = new ClaseMensajes(this.router);
  }

  ngOnInit(): void {
    this.listarColegiosComboBox();
  }

  //llenado del combo box para seleccionar colegio
  listarColegiosComboBox()
  {
    this.servicio_curso.getColegiosComboBox().subscribe(
      res => {
        console.log(res);
        this.lista_combo_box_colegio = <any>res;
      },
      err => console.log(err)
    );
  }

  //Registro de nuevo curso
  agregarCurso()
  {
    delete this.curso._id;

    this.servicio_curso.aniadirCurso(this.curso).subscribe(
      res => {
        this.mensaje.mensajeRegistroExitoso('/lista-colegio');
      },
      err => this.mensaje.mensajeError('/lista-colegio')
    )
  }

  //boton cancelar (Se usa para recuperar la vista anterior sin perder datos)
  cancelar()
  {
    this.location.back();
  }

}
