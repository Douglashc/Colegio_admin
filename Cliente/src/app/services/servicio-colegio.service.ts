import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { InterfaceColegio } from 'app/interfaces/interface-colegio';

@Injectable({
  providedIn: 'root'
})
export class ServicioColegioService {

  url = 'http://localhost:3000/colegio';

  constructor(private http: HttpClient) { }

  //Obtener los colegios desde la api
  getColegio()
  {
    return this.http.get(this.url);
  }

  //Obtener un solo dato de colegio
  getUnColegio(id:string)
  {
    return this.http.get(this.url+'/'+id);
  }

  //Agregar un colegio
  aniadirColegio(colegio:InterfaceColegio)
  {
    return this.http.post(this.url, colegio);
  }

  //Editar un condominio
  editarColegio(id:string, colegio:InterfaceColegio)
  {
    return this.http.put(this.url+'/'+id, colegio);
  }
}
