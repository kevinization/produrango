import { Component} from '@angular/core';

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
  static _provider: string = '';

  logged: boolean = AppComponent.logged;

    // Cosas para la implementación de Angular Google Maps
    lat: number;
    lng: number;
    zoom: number;
    mapTypeId: string;
    located: boolean;

    constructor(){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 17;
        // located se pone en true al presionar el botón para obtener la posición actual para que el marcador aparezca
        this.located = true;
      });
    }
}
