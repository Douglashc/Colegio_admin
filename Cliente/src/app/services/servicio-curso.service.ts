import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { InterfaceCurso } from 'app/interfaces/interface-curso';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursoService {

  url = 'http://localhost:3000/curso';
  url2 = 'http://localhost:3000/colegio'

  constructor(private http: HttpClient) { }

  //Obtener los cursos de acuerdo a la seleccion de colegio
  getCurso(id:string)
  {
    return this.http.get(this.url+'/'+id);
  }

  //Obtener un solo dato de curso para editarlo
  getUnCurso(id:string)
  {
    return this.http.get(this.url+'/'+id);
  }

  //Agregar un curso
  aniadirCurso(curso:InterfaceCurso)
  {
    return this.http.post(this.url, curso);
  }

  //Editar un curso
  editarCurso(id:string, curso:InterfaceCurso)
  {
    return this.http.put(this.url+'/'+id, curso);
  }

  //Obtener los colegio para el combo box
  getColegioComboBox(id:string)
  {
    return this.http.get(this.url2+'/'+id);
  }
}
