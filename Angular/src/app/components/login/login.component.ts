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

  constructor(private authService: SocialAuthService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.dataService.authUser(this.AT, this.email, this.name, this.foto).subscribe((resultado) => {
      this.dataService.activeUser(this.AT).subscribe((res) => {
        console.log(resultado);
        this.router.navigate(['home']);
      }, (err) => {
        console.log(err);
      });
    }, (error) => {
      console.log(error);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.AT = this.user.authToken;
      this.email = this.user.email;
      this.name = this.user.name;
      this.foto = this.user.photoUrl;
      this.dataService.authUser(this.AT, this.email, this.name, this.foto).subscribe((resultado) => {
        console.log(resultado);
        AppComponent.user = this.name;
        AppComponent.logged = true;
        AppComponent.email = this.email;
        AppComponent.foto = this.foto;
        console.log(AppComponent.logged);
        this.dataService.activeUser(this.AT).subscribe((res) => {
          console.log(resultado);
          this.router.navigate(['home']);
        }, (err) => {
          console.log(err);
        });

      }, (error) => {
        console.log(error);
      });
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  sign(){
    this.name = 'Kevin';
    this.email = 'jdlfjlsjls15@gmail.com';
    this.foto = 'https://i.imgur.com/UUDIash.png';
    this.AT = 'FFJFLILE8948934.KY29DHFSKFUWE@';
    this.dataService.authUser(this.AT, this.email, this.name, this.foto).subscribe((resultado) => {
      console.log(resultado);
      AppComponent.user = this.name;
      AppComponent.logged = true;
      AppComponent.email = this.email;
      AppComponent.foto = this.foto;
      console.log(AppComponent.logged);

      this.router.onSameUrlNavigation = 'reload';
    }, (error) => {
      console.log(error);
    });
  }

}
