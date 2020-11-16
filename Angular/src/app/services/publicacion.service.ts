import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../models/publicacion';
import { Example } from '../models/example';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {


  // tslint:disable-next-line: member-ordering
  selectedPublicacion: Publicacion;
  selectedExample: Example;
  // tslint:disable-next-line: member-ordering
  publicaciones: Publicacion[];
  examples: Example[];
  // tslint:disable-next-line: member-ordering
  readonly URL_API = 'http://localhost:3000/api/publicaciones';
  constructor(private http: HttpClient) {
      this.selectedPublicacion = new Publicacion();
   }
  getPublicaciones(){
    return this.http.get(this.URL_API);
  }

  postPublicacion(tit: string, fe: string, cat: string, des: string,
                  arch: string, ub: string, den: number, rein: number, username: string){
    let newPublicacion = {
      titulo : tit,
      fecha: fe,
      categoria: cat,
      descripcion: des,
      archivos: arch,
      ubicacion: ub,
      denuncias: den,
      reincidencias: rein,
      nombre_usuario: username
    };
    return this.http.post(this.URL_API, newPublicacion);
  }

  putPublicacion(publicacion: Publicacion){
    return this.http.put(this.URL_API + `/${publicacion._id}`, publicacion);
  }

  deletePublicacion(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
