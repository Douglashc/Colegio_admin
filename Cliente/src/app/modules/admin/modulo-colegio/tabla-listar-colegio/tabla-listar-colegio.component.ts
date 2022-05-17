import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ServicioColegioService } from 'app/services/servicio-colegio.service';
import { InterfaceColegio } from 'app/interfaces/interface-colegio';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-listar-colegio',
  templateUrl: './tabla-listar-colegio.component.html',
  styleUrls: ['./tabla-listar-colegio.component.scss']
})
export class TablaListarColegioComponent implements OnInit {

  columnas: string[] = ['Colegio', 'Direccion', 'Telefono', 'Aulas','Editar'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Array de colegios
  colegio_lista: InterfaceColegio[];
  
  //Variable donde se almacena la paginacion
  dataSource: any;
  
  //Inicializando nuestras variables
  constructor(private colegio_servicio: ServicioColegioService, private router: Router)
  {
    this.colegio_lista = [];
  }

  //Inicializando el listado de colegios
  ngOnInit() 
  {
    this.listarColegio();
  }

  //Funcion que se encarga del filtro de busqueda usando un evento
  filtrar(event: Event) 
  {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  
  //Listando todos los registros de colegios
  listarColegio()
  {
    this.colegio_servicio.getColegio().subscribe(
      res=>{
        console.log(res);
        this.colegio_lista=<any>res;
        this.dataSource = new MatTableDataSource(this.colegio_lista);
        this.dataSource.paginator = this.paginator;
      },
      err=>console.log(err)
    );
  }

  //Modificar colegio
  modificarColegio(id:any)
  {
    this.router.navigate(['/editar-colegio/'+id]);
  }

  mostrarCursos(id:any)
  {
    this.router.navigate(['/lista-curso/'+id]);
  }

}
