export class Publicacion {

    constructor(_id = '', titulo = '', fecha = '', categoria = '', descripcion = '',
                archivos = '', ubicacion = '', denuncias = 0, reincidencias = 0, confirmacion_reincidencias = false,
                 contenido_comentario = '', nombre_usuario = '' ){
        this._id = _id;
        this.titulo = titulo;
        this.fecha = fecha;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.archivos = archivos;
        this.ubicacion = ubicacion;
        this.denuncias = denuncias;
        this.reincidencias = reincidencias;
        this.confirmacion_reincidencias = confirmacion_reincidencias;
        this.contenido_comentario = contenido_comentario;
        this.nombre_usuario = nombre_usuario;

    }
    _id: string;
    titulo: string;
    fecha: string;
    categoria: string;
    descripcion: string;
    archivos: string;
    ubicacion: string;
    denuncias: number;
    reincidencias: number;
    confirmacion_reincidencias: boolean;
    contenido_comentario: string;
    nombre_usuario: string;
}
