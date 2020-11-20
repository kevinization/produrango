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

  activeUser( prvd: string){
    let newAuth = {
      provider: prvd,
      log: true
    };
    return this._client.post(this.URLLOG, newAuth);
  }

  inactiveUser( provider: string){
    let A ={
      provider: provider,
      log: false
    }
    return this._client.put('http://localhost:3000/api/activos/' + provider , A);
  }

  searchUser( provider: string){
    return this._client.get('http://localhost:3000/api/activos/' + provider);
  }

  searchData(aT: string){
    let _authT = aT;
    return this._client.get(this.URL_API + _authT);
  }

  // Falta crear las rutas




}
