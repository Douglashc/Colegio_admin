import Swal from "sweetalert2";

export class ClaseMensajes{

    constructor(private router){}

    mensajeRegistroExitoso(ruta: any, tipo: any)
    {
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            confirmButtonText: 'Aceptar',
            text: 'Los datos se registraron con exito...!',
            footer: ''
        })
        .then( (result) => {
            if (result.value == true) {
              this.router.navigate([ruta]);
            }
        })
    }

    mensajeActualizacionExitoso(ruta: any){
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            confirmButtonText: 'Aceptar',
            text: 'Los datos se actualizaron con exito...!',
            footer: ''
        })
        .then( (result) => {
            if (result.value == true) {
              this.router.navigate([ruta]);
            }
        })
    }

    mensajeError(ruta: any){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            confirmButtonText: 'Aceptar',
            text: 'No se pudo realizar la accion',
            footer: ''
        })
        .then( (result) => {
            if (result.value == true) {
              this.router.navigate([ruta]);
            }
        })
    }
}