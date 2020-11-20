import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DataService } from '../../services/data.service';

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

  constructor(private authService: SocialAuthService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
  }

  ngAfterContentChecked(): void {
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.sign();
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.sign();
  }

  signOut(): void {
    this.authService.signOut();
    this.dataService.inactiveUser(this.AT).subscribe((resultado) => {
      console.log(resultado);
    }, (err) => {
      console.log(err);
    });
  }

  sign(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.provider = this.user.provider;
      this.email = this.user.email;
      this.name = this.user.name;
      this.foto = this.user.photoUrl;
      this.provider = this.provider + '*' + this.email;
      this.dataService.authUser(this.provider, this.email, this.name, this.foto).subscribe((resultado) => {
        console.log(resultado);
        AppComponent.user = this.name;
        AppComponent.logged = true;
        AppComponent.email = this.email;
        AppComponent.foto = this.foto;
        AppComponent.provider = this. provider;
        this.AT = this.provider + '*' + this.email;
        this.dataService.activeUser(this.AT).subscribe((res) => {
          AppComponent.AT = this.AT;
          console.log(res);
        }, (err) => {console.log(err); });
      }, (error) => {console.log(error); });
    });
  }

  activeSession(){
    this.dataService.activeUser(this.provider).subscribe((res) => {
      // Nos quedamos editando este
    });
  }

}
