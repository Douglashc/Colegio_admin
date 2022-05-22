import { Component, OnInit } from '@angular/core';

import { ServicioColegioService } from 'app/services/servicio-colegio.service';
import { InterfaceColegio } from 'app/interfaces/interface-colegio';
import { Router } from '@angular/router';

import { ClaseMensajes } from 'app/interfaces/clase-mensajes';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registrar-colegio',
  templateUrl: './form-registrar-colegio.component.html',
  styleUrls: ['./form-registrar-colegio.component.scss']
})
export class FormRegistrarColegioComponent implements OnInit {

  colegio: InterfaceColegio = {
    _id: '',
    nombreColegio: '',
    direccion: '',
    telefono: '',
  }

  mensaje: any;

  constructor(private servicio_colegio: ServicioColegioService, private router: Router) 
  { 
    this.mensaje = new ClaseMensajes(this.router);
  }

  ngOnInit(): void {
  }

  agregarColegio()
  {
    delete this.colegio._id;

    this.servicio_colegio.aniadirColegio(this.colegio).subscribe(
      res => {
        this.mensaje.mensajeRegistroExitoso('/lista-colegio');
      },
      err => this.mensaje.mensajeError('/lista-colegio')
    )
  }

}
