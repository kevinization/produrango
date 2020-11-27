import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000/api/usuarios';
  token;

  constructor(private http: HttpClient, private router: Router) { }

  login(prvdr: string, correo: string, nombre: string, fot: string) {
    var AT = prvdr + '*' + correo;
    let newData = {
      provider: prvdr,
      email: correo,
      name: nombre,
      foto: fot,
      prvd: AT
    };
    this.http.post(this.uri, newData).subscribe((resp: any) => {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('auth_token', resp.token);
      localStorage.setItem('name', resp.user.name);
      localStorage.setItem('email', resp.user.email);
      localStorage.setItem('prvd', resp.user.provider);
      localStorage.setItem('foto', resp.user.foto);
      localStorage.setItem('type', resp.user.tipo);
      console.log(resp);
      AppComponent.logged = true;

    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('prvd');
    localStorage.removeItem('foto');
    localStorage.removeItem('profile');
    localStorage.removeItem('publicacion');
    localStorage.removeItem('type');
    localStorage.removeItem('logged');
    AppComponent.logged = false;
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
