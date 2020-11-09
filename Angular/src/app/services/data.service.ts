import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private _client: HttpClient) { }
  authUser( aT: string, correo: string, nombre: string, fot: string){
    let newData = {
      authT: aT,
      email: correo,
      name: nombre,
      foto: fot
    }
    return this._client.post(this.URL_API, newData);
  }
}
