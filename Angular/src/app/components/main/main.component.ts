import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import { AppComponent } from 'src/app/app.component';

import { PublicacionService } from '../../services/publicacion.service';
import { ExampleService } from '../../services/example.service';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PublicacionService]
})
export class MainComponent implements OnInit {
  logged: boolean;
  private _username = "";

  zoom = 6;

  public get username() {
    return this._username;
  }
  public set username(value) {
    this._username = value;
  }
  constructor(public publicacionService: PublicacionService, exampleService: ExampleService) { }

  ngOnInit(): void {
    this.logged = AppComponent.logged;
    this.getPublicaciones();
  }
  // tslint:disable-next-line: typedef
  getPublicaciones() {
    this.publicacionService.getPublicaciones()
      .subscribe(res => {
        this.publicacionService.publicaciones = res as Publicacion[];
      });
  }

  ngAfterContentChecked(): void {
    this.logged = AppComponent.logged;
    if (this.logged === true) {
      this.username = AppComponent.user;
    }
  }

  aumentarDen(den: number){
    den = den + 1;
  }

    // tslint:disable-next-line: typedef
    /*/getUsuarios() {
      this.publicacionService.getExamples()
        .subscribe(res => {
          this.publicacionService. = res as Example[];
          console.log(res);
        });
    }*/

}

