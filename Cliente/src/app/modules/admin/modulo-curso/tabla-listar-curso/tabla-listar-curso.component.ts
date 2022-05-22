import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ServicioCursoService } from 'app/services/servicio-curso.service';
import { InterfaceCurso } from 'app/interfaces/interface-curso';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { InterfaceColegio } from 'app/interfaces/interface-colegio';

@Component({
  selector: 'app-tabla-listar-curso',
  templateUrl: './tabla-listar-curso.component.html',
  styleUrls: ['./tabla-listar-curso.component.scss']
})
export class TablaListarCursoComponent implements OnInit {

  columnas: string[] = ['Curso', 'Paralelo', 'Personas','Editar'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Array de cursos
  curso_lista: InterfaceCurso[];
  colegio_seleccionado: InterfaceColegio[];
  
  //Variable donde se almacena la paginacion
  dataSource: any;
  
  //Inicializando nuestras variables
  constructor(private curso_servicio: ServicioCursoService, private router: Router, private activated_route: ActivatedRoute)
  {
    this.curso_lista = [];
    this.colegio_seleccionado = [];
  }

  //Inicializando el listado de cursos
  ngOnInit() 
  {
    this.listarCurso();
  }

  //Funcion que se encarga del filtro de busqueda usando un evento
  filtrar(event: Event) 
  {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  
  //Listando todos los registros de curso de colegio seleccionado
  listarCurso()
  {
    const id_entrante = this.activated_route.snapshot.params['id'];

    this.curso_servicio.getCurso(id_entrante).subscribe(
      res=>{
        console.log(res);
        this.curso_lista=<any>res;
        this.dataSource = new MatTableDataSource(this.curso_lista);
        this.dataSource.paginator = this.paginator;
        
        this.curso_servicio.getColegioComboBox(id_entrante).subscribe(
          res => {
            console.log(res)
            this.colegio_seleccionado=<any>res;
          },
          err => console.log(err)
        );
      },
      err=>console.log(err)
    );
  }

  modificarCurso(id:any)
  {
    const id_colegio = this.activated_route.snapshot.params['id'];
    this.router.navigate(['/editar-curso/'+id_colegio+'/'+id]);
  }

  obtenerColegioId()
  {
    const id_entrante2 = this.activated_route.snapshot.params['id'];
    this.router.navigate(['/registrar-curso/'+id_entrante2]);
  }


  mostrarPersonas(id:any)
  {
    this.router.navigate(['/lista-persona/'+id]);
  }

}
