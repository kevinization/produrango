import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {


  // tslint:disable-next-line: member-ordering
  selectedPublicacion: Publicacion;
  // tslint:disable-next-line: member-ordering
  publicaciones: Publicacion[];
  // tslint:disable-next-line: member-ordering
  readonly URL_API = 'http://localhost:3000/api/publicaciones';
  readonly URL_API_usuarios = 'http://localhost:3000/api/usuarios';
  constructor(private http: HttpClient) {
      this.selectedPublicacion = new Publicacion();
   }

  getExamples() {
    return this.http.get(this.URL_API_usuarios);
  }
  getPublicaciones(){
    return this.http.get(this.URL_API);
  }

  postPublicacion(Publicacion: Publicacion){
    return this.http.post(this.URL_API, Publicacion);
  }

  putPublicacion(publicacion: Publicacion){
    return this.http.put(this.URL_API + `/${publicacion._id}`, publicacion);
  }

  deletePublicacion(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
