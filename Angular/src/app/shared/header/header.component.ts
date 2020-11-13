import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppComponent]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  AT: string;
  logged: boolean;

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
    this.username = AppComponent.user;
    this.logged = AppComponent.logged;
    this.email = AppComponent.email;
    this.foto = AppComponent.foto;
    this.AT = AppComponent.AT;
    this.provider = AppComponent.provider;
  }

  ngAfterContentChecked(): void {
      this.logged = AppComponent.logged;
      if (this.logged === true) {
        this.username = AppComponent.user;
        this.email = AppComponent.email;
        this.foto = AppComponent.foto;
      }
  }

}
