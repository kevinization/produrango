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
  getPublicaciones(flag: string){
    let p = localStorage.getItem('prvd');
    let e = localStorage.getItem('email');
    if( p !== null && e !== null){
      let prvd = p + '*' + e + ',' + flag ;
      return this.http.get(this.URL_API + '/' + prvd);
    }else{
      return this.http.get(this.URL_API );
    }
  }

  getPublicacion(id: string){
      console.log(id);
      return this.http.get(this.URL_API + '/' + id);
  }

  postPublicacion(tit: string, fe: string, cat: string, des: string,
                  arch: string, lng: number, lat: number, den: number, rein: number, username: string){
    let p = localStorage.getItem('prvd');
    let e = localStorage.getItem('email');
    let newPublicacion = {
      titulo : tit,
      fecha: fe,
      categoria: cat,
      descripcion: des,
      archivos: arch,
      prvd: p + '*' + e,
      longitud: lng,
      latitud: lat,
      denuncias: den,
      reincidencias: rein,
      nombre_usuario: username
    };
    return this.http.post(this.URL_API, newPublicacion);
  }

  putDenuncia(_id: string, d: number){
      let updPublicacion = {
        flag: true,
        denuncias: d
      }
      return this.http.put(this.URL_API + '/' + _id, updPublicacion);
  }

  putPublicacion(ID: string, tit: string, fe: string, cat: string, des: string,
    arch: string, lng: number, lat: number){
    let updPublicacion = {
      titulo: tit,
      fecha: fe,
      categroia: cat,
      descripcion: des,
      archivos: arch,
      longitud: lng,
      latitud: lat,
      flag: false
    }
    return this.http.put(this.URL_API + '/' + ID, updPublicacion);
  }

  deletePublicacion(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
