import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ServicioTipoPersonaService } from 'app/services/servicio-tipo-persona.service';
import { InterfaceTipoPersona } from 'app/interfaces/interface-tipo-persona';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-listar-tipo-persona',
  templateUrl: './tabla-listar-tipo-persona.component.html',
  styleUrls: ['./tabla-listar-tipo-persona.component.scss']
})
export class TablaListarTipoPersonaComponent implements OnInit {

  columnas: string[] = ['ID', 'Tipo Persona', 'Editar'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Array de tipo personas
  tipo_persona_lista: InterfaceTipoPersona[];
  
  //Variable donde se almacena la paginacion
  dataSource: any;
  
  //Inicializando nuestras variables
  constructor(private tipo_persona_servicio: ServicioTipoPersonaService, private router: Router)
  {
    this.tipo_persona_lista = [];
  }

  //Inicializando el listado de tipo personas
  ngOnInit() 
  {
    this.listarTipoPersona();
  }

  //Funcion que se encarga del filtro de busqueda usando un evento
  filtrar(event: Event) 
  {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  
  //Listando todos los registros de tipo persona
  listarTipoPersona()
  {
    this.tipo_persona_servicio.getTipoPersona().subscribe(
      res=>{
        console.log(res);
        this.tipo_persona_lista=<any>res;
        this.dataSource = new MatTableDataSource(this.tipo_persona_lista);
        this.dataSource.paginator = this.paginator;
      },
      err=>console.log(err)
    );
  }

  //Modificar tipo persona
  modificarTipoPersona(id:any)
  {
    this.router.navigate(['/editar-tipo-persona/'+id]);
  }

}
