import { InterfaceCurso } from "./interface-curso";
import { InterfaceTipoPersona } from "./interface-tipo-persona";

export interface InterfacePersona extends InterfaceCurso, InterfaceTipoPersona
{
    _id?: string,
    nombrePersona?: string,
    apellido_paterno?: string,
    apellido_materno?: string,
    genero?: string,
    fecha_nacimiento?: string,
    ci?: string,
    email?: string,
    celular?: string,
    direccion_domicilio?: string,
    foto?: string,
    estado?: boolean,
    cursoID?: string,
    tipo_personaID?: string
}