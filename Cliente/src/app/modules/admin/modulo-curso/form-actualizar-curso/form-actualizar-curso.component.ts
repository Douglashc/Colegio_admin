import { Component, OnInit } from '@angular/core';

import { ServicioCursoService } from 'app/services/servicio-curso.service';
import { InterfaceCurso } from 'app/interfaces/interface-curso';
import { InterfaceColegio } from 'app/interfaces/interface-colegio';
import { Router, ActivatedRoute } from '@angular/router';

import { ClaseMensajes } from 'app/interfaces/clase-mensajes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-actualizar-curso',
  templateUrl: './form-actualizar-curso.component.html',
  styleUrls: ['./form-actualizar-curso.component.scss']
})
export class FormActualizarCursoComponent implements OnInit {

  curso: InterfaceCurso = {
    _id: '',
    nombreCurso: '',
    paralelo: '',
    colegioID: '',
  }

  lista_combo_box_colegio: InterfaceColegio[];

  mensaje: any;

  constructor(private servicio_curso: ServicioCursoService, private router: Router, private location: Location, private activated_router: ActivatedRoute) 
  { 
    this.lista_combo_box_colegio = [];
    this.mensaje = new ClaseMensajes(this.router);
  }

  ngOnInit(): void { 
    //
    const id_entrante = this.activated_router.snapshot.params['id'];
    
    if(id_entrante)
    {
      this.listarColegiosComboBox();
      this.servicio_curso.getUnCurso(id_entrante).subscribe(
        res => {
          this.curso = res;
        },
        err => console.log(err)
      );
    }
  }

  //llenado del combo box para seleccionar colegio
  listarColegiosComboBox()
  {
    const id_colegio_lista = this.activated_router.snapshot.params['idcolegio'];

    this.servicio_curso.getColegioComboBox(id_colegio_lista).subscribe(
      res => {
        console.log(res);
        this.lista_combo_box_colegio = <any>res;
      },
      err => console.log(err)
    );
  }

  actualizarCurso(){

    const id_colegio_entrante = this.activated_router.snapshot.params['idcolegio'];

    this.servicio_curso.editarCurso(this.curso._id, this.curso).subscribe(
      res => {
        this.mensaje.mensajeActualizacionExitoso('/lista-curso/'+id_colegio_entrante);
      },
      err => this.mensaje.mensajeError('/lista-curso/'+id_colegio_entrante)
    );
  }

  //boton cancelar (Se usa para recuperar la vista anterior sin perder datos)
  cancelar()
  {
    this.location.back();
  }
}
