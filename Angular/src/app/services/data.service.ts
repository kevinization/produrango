import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly URL_API = 'http://localhost:3000/';

  constructor(private _client: HttpClient) { }

  añadirPublicacion(_id: string,titulo: string, fecha: string, categoria: string, descripcion: string, archivos: string, 
    ubicacion: string, denuncias: number, reincidencias: number, confirmacion_reincidencias: boolean, contenido_comentario: string,
     nombre_usuario: string){
    
      let nuevaPublicacion = {
        _id: _id,
        titulo: titulo,
        fecha: fecha,
        categoria: categoria,
        descripcion: descripcion,
        archivos: archivos,
        ubicacion: ubicacion,
        denuncias: denuncias,
        reincidencias: reincidencias,
        confirmacion_reincidencias: confirmacion_reincidencias,
        contenido_comentario: contenido_comentario,
        nombre_usuario: nombre_usuario
      }

      return this._client.post(this.URL_API + 'api/publicaciones', nuevaPublicacion);
  }
}
