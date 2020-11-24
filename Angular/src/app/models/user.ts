export class Usuario {

    constructor(_id = '', name = '', contrasena = '', tipo = '', prvd = '', foto = '', telefono = '', num_reportes = 0){
        this._id = _id;
        this.name = name;
        this.contrasena = contrasena;
        this.tipo = tipo;
        this.foto = foto;
        this.prvd = prvd;
        this.telefono = telefono;
        this.num_reportes = num_reportes;

    }
    _id: string;
    name: string;
    contrasena: string;
    tipo: string;
    foto: string;
    prvd: string;
    telefono: string;
    num_reportes: number;
}
