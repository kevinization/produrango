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

  logged: boolean = AppComponent.logged;
}
