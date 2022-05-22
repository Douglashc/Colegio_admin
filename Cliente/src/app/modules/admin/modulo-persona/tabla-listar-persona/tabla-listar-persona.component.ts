import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ServicioPersonaService } from 'app/services/servicio-persona.service';
import { InterfacePersona } from 'app/interfaces/interface-persona';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Location } from '@angular/common';

import { InterfaceCurso } from 'app/interfaces/interface-curso';

@Component({
  selector: 'app-tabla-listar-persona',
  templateUrl: './tabla-listar-persona.component.html',
  styleUrls: ['./tabla-listar-persona.component.scss']
})
export class TablaListarPersonaComponent implements OnInit {

  columnas: string[] = ['Nombre Completo', 'Fecha de Nacimiento', 'Ci', 'Genero', 'Email', 'Celular', 'Direccion domicilio', 'Tipo persona','Editar'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Array de personas
  persona_lista: InterfacePersona[];
  curso_seleccionado: InterfaceCurso[];
  
  //Variable donde se almacena la paginacion
  dataSource: any;
  
  //Inicializando nuestras variables
  constructor(private persona_servicio: ServicioPersonaService, private router: Router, private activated_route: ActivatedRoute, private location: Location)
  {
    this.persona_lista = [];
    this.curso_seleccionado = [];
  }

  //Inicializando el listado de cursos
  ngOnInit() 
  {
    this.listarPersona();
  }

  //Funcion que se encarga del filtro de busqueda usando un evento
  filtrar(event: Event) 
  {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  
  //Listando todos los registros de persona de curso seleccionado
  listarPersona()
  { 
    const id_entrante = this.activated_route.snapshot.params['id'];

    this.persona_servicio.getPersona(id_entrante).subscribe(
      res=>{
        this.persona_lista=<any>res;
        this.dataSource = new MatTableDataSource(this.persona_lista);
        this.dataSource.paginator = this.paginator;
        
        this.persona_servicio.getCursoComboBox(id_entrante).subscribe(
          res => {
            this.curso_seleccionado=<any>res;
          },
          err => console.log(err)
        );
      },
      err=>console.log(err)
    );
  }

  modificarPersona(id:any)
  {
    const id_curso = this.activated_route.snapshot.params['id'];
    this.router.navigate(['/editar-persona/'+id_curso+'/'+id]);
  }

  obtenerCursoId()
  {
    const id_entrante2 = this.activated_route.snapshot.params['id'];
    this.router.navigate(['/registrar-persona/'+id_entrante2]);
  }

  cancelar()
  {
    this.location.back();
  }

}
