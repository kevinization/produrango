import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from '../../services/auth.service';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppComponent]
})
export class HeaderComponent implements OnInit {
  flag: boolean = false;
  constructor(private authService: SocialAuthService, private AService: AuthService, private router: Router) { 
    if (AppComponent.type === 'Administrador'){
      this.flag = true;
    }
  }

  AT: string;
  logged = false;

  private _username = '';
  public get username() {
    return this._username;
  }
  public set username(value) {
    this._username = value;
  }

  private _email = "";
  public get email() {
    return this._email;
  }
  public set email(value) {
    this._email = value;
  }

  private _provider = "";
  public get provider() {
    return this._provider;
  }
  public set provider(value) {
    this._provider = value;
  }
  
  private _foto = "";
  public get foto() {
    return this._foto;
  }
  public set foto(value) {
    this._foto = value;
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    if (localStorage.getItem('logged') === 'true') {
        this.username = AppComponent.user;
        this.logged = true;
        this.email = AppComponent.email;
        this.foto = AppComponent.foto;
        this.AT = AppComponent.AT;
        this.provider = AppComponent.provider;
    }
  }
  perfil(){
    let id = this.provider + '*' + this.email;
    localStorage.setItem('profile', id);
    this.router.navigateByUrl('profile');
  }
  signOut(): void {
    this.authService.signOut();
    this.AService.logout();
    window.location.reload();
  }

}
