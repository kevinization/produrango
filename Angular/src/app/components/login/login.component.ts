import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  name: string;
  email: string;
  foto: string;
  AT: string;
  provider: string;

  constructor(private authService: SocialAuthService, private router: Router,
              private dataService: DataService, private autService: AuthService) {
                if (localStorage.getItem('logged') === 'true'){
                  this.router.navigateByUrl('#');
                }
              }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });

  }

  ngAfterContentChecked(): void {
    if (AppComponent.logged === true) {
      this.name = AppComponent.user;
      this.email = AppComponent.email;
      this.foto = AppComponent.foto;
      this.provider = AppComponent.provider;
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.login();
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.login();
  }

  login(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.provider = this.user.provider;
      this.email = this.user.email;
      this.name = this.user.name;
      this.foto = this.user.photoUrl;
      console.log('you are logging in');
      this.autService.login(this.provider, this.email, this.name, this.foto);
      }, (error) => {console.log(error);
    });
  }

}
