export class Publicacion {
    _id: string;
    titulo: string;
    fecha: string;
    categoria: string;
    descripcion: string;
    archivos: string;
    latitud: string;
    longitud: string;
    denuncias: number;
    reincidencias: number;
    confirmacion_reincidencias: boolean;
    contenido_comentario: string;
    nombre_usuario: string;

    constructor(_id = '', titulo = '', fecha = '', categoria = '', descripcion = '', archivos = '',
                latitud = '', longitud = '', denuncias = 0, reincidencias = 0, confirmacion_reincidencias = false,
                contenido_comentario = '', nombre_usuario = '' ){
        this._id = _id;
        this.titulo = titulo;
        this.fecha = fecha;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.archivos = archivos;
        this.latitud = latitud;
        this.longitud = longitud;
        this.denuncias = denuncias;
        this.reincidencias = reincidencias;
        this.confirmacion_reincidencias = confirmacion_reincidencias;
        this.contenido_comentario = contenido_comentario;
        this.nombre_usuario = nombre_usuario;

    }
}
