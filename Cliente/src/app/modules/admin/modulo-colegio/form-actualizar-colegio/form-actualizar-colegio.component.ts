import { Component, OnInit } from '@angular/core';

import { ServicioColegioService } from 'app/services/servicio-colegio.service';
import { InterfaceColegio } from 'app/interfaces/interface-colegio';
import { Router, ActivatedRoute } from '@angular/router';

import { ClaseMensajes } from 'app/interfaces/clase-mensajes';

@Component({
  selector: 'app-form-actualizar-colegio',
  templateUrl: './form-actualizar-colegio.component.html',
  styleUrls: ['./form-actualizar-colegio.component.scss']
})
export class FormActualizarColegioComponent implements OnInit {

  colegio: InterfaceColegio = {
    _id: '',
    nombreColegio: '',
    direccion: '',
    telefono: '',
  }

  mensaje: any;

  constructor(private servicio_colegio: ServicioColegioService, private router: Router, private activated_route: ActivatedRoute) 
  { 
    this.mensaje = new ClaseMensajes(this.router);
  }

  ngOnInit(): void {

    const id_entrante = this.activated_route.snapshot.params['id'];

    if(id_entrante)
    {
      this.servicio_colegio.getUnColegio(id_entrante).subscribe(
        res => {
          this.colegio = res;
        },
        err => console.log(err)
      );
    }

  }

  actualizarColegio()
  {
    this.servicio_colegio.editarColegio(this.colegio._id, this.colegio).subscribe(
      res => {
        this.mensaje.mensajeActualizacionExitoso('/lista-colegio');
      },
      err => this.mensaje.mensajeError('/lista-colegio')
    );
  }

}
