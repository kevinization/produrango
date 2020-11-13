import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly URL_API = 'http://localhost:3000/api/usuarios/';
  readonly URLLOG = 'http://localhost:3000/api/activos/';

  constructor(private _client: HttpClient) { }
  authUser( prvd: string, correo: string, nombre: string, fot: string){
    let newData = {
      provider: prvd,
      email: correo,
      name: nombre,
      foto: fot
    };
    return this._client.post(this.URL_API, newData);
  }

  activeUser( prvd: string, correo: string){
    let newAuth = {
      provider: prvd,
      email: correo
    };
    return this._client.post(this.URLLOG, newAuth);
  }

  searchUser( aT: string){
    let _authT = aT;
    return this._client.get(this.URLLOG + _authT);
  }

  searchData(aT: string){
    let _authT = aT;
    return this._client.get(this.URL_API + _authT);
  }




}
