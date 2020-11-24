import { Component} from '@angular/core';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Angular';

  static get logged(): boolean {
    return AppComponent._logged;
  }
  static set logged(value: boolean) {
    AppComponent._logged = value;
  }
  private static _logged: boolean = false;

  static get user(): string {
    return AppComponent._user;
  }
  static set user(value: string) {
    AppComponent._user = value;
  }
  static _user: string = '';

  static get email(): string {
    return AppComponent._email;
  }
  static set email(value: string) {
    AppComponent._email = value;
  }
  static _email: string = '';
  
  static get foto(): string {
    return AppComponent._foto;
  }
  static set foto(value: string) {
    AppComponent._foto = value;
  }
  static _foto: string = '';

  static get AT(): string {
    return AppComponent._AT;
  }
  static set AT(value: string) {
    AppComponent._AT = value;
  }
  static _AT: string = '';

  static get provider(): string {
    return AppComponent._provider;
  }
  static set provider(value: string) {
    AppComponent._provider = value;
  }
  static _provider: string = "GOOGLE*kevin.rodarte.is@unipolidgo.edu.mx";

  logged: boolean = AppComponent.logged;

    // Cosas para la implementación de Angular Google Maps
    lat: number;
    lng: number;
    zoom: number;
    mapTypeId: string;
    located: boolean;
    T: string;

    constructor(dataService: DataService, authService: AuthService){
      if (localStorage.getItem('logged') === "true") {
        //verifica mos si el token aun es valid
        AppComponent.user = localStorage.getItem('name');
        AppComponent.email = localStorage.getItem('email');
        AppComponent.foto = localStorage.getItem('foto');
        AppComponent.provider = localStorage.getItem('prvd');
      }
    }
}
