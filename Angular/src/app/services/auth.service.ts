import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { SocialUser } from 'angularx-social-login';

@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000/api/usuarios';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient, private socialUser: SocialUser) { }
  authUser( aT: string, correo: string, nombre: string, foto: string){
    let newData = {
      authT: aT,
      email: correo,
      name: nombre,
      photo: foto
    }
    return this.httpClient.post(this.AUTH_SERVER, newData);
  }
}
