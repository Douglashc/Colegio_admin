import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { InterfaceTipoPersona } from 'app/interfaces/interface-tipo-persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioTipoPersonaService {

  url = 'http://localhost:3000/tipoPersona';

  constructor(private http: HttpClient) { }

  //Obtener los tipos de personas desde la api
  getTipoPersona()
  {
    return this.http.get(this.url);
  }

  //Obtener un solo dato de tipo persona
  getUnTipoPersona(id:string)
  {
    return this.http.get(this.url+'/'+id);
  }

  //Agregar un tipo de persona
  aniadirTipoPersona(tipo_persona:InterfaceTipoPersona)
  {
    return this.http.post(this.url, tipo_persona);
  }

  //Editar un tipo de persona
  editarTipoPersona(id:string, tipo_persona:InterfaceTipoPersona)
  {
    return this.http.put(this.url+'/'+id, tipo_persona);
  }
}
