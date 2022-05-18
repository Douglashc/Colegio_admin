import { InterfaceColegio } from "./interface-colegio"

export interface InterfaceCurso extends InterfaceColegio
{
    _id?: string,
    nombreCurso?: string,
    paralelo?: string,
    colegioID?: string
}