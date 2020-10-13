import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  selectedPublicacion: Publicacion;
  publicaciones: Publicacion[];
  readonly URL_API = 'http://localhost:3000/api/publicaciones';
  constructor(private http: HttpClient) {
      this.selectedPublicacion = new Publicacion();
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
