import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { InterfacePersona } from 'app/interfaces/interface-persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {

  url = 'http://localhost:3000/persona';
  url2 = 'http://localhost:3000/curso';
  url3 = 'http://localhost:3000/tipoPersona';

  constructor(private http: HttpClient) { }

  //Obtener las personas de acuerdo al curso seleccionado
  getPersona(id:string)
  {
    return this.http.get(this.url+'/'+id);
  }

  //Obtener un solo dato de persona para editarlo
  getUnaPersona(id:string)
  {
    return this.http.get(this.url+'/'+id);
  }

  //Agregar una persona al curso
  aniadirPersona(persona:InterfacePersona)
  {
    return this.http.post(this.url, persona);
  }

  //Editar una persona
  editarPersona(id:string, persona:InterfacePersona)
  {
    return this.http.put(this.url+'/'+id, persona);
  }

  //Obtener los cursos para el combo box
  getCursoComboBox(id:string)
  {
    console.log('id curso sevicio: '+id)
    return this.http.get(this.url2+'/'+id);
  }

  //Obtener tipo persona para el combo box, y asi agregarselo a la persona
  getTipoPersonaComboBox()
  {
    return this.http.get(this.url3);
  }
}
