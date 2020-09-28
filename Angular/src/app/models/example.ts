export class Example {

    constructor(_id = '', nombre = '', contrasena = '', tipo = '', foto = '', telefono = '', num_reportes = 0){
        this._id = _id;
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.tipo = tipo;
        this.foto = foto;
        this.telefono = telefono;
        this.num_reportes = num_reportes;

    }
    _id: string;
    nombre: string;
    contrasena: string;
    tipo: string;
    foto: string;
    telefono: string;
    num_reportes: number;
}
