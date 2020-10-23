import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import { Example } from 'src/app/models/example';

import { PublicacionService } from '../../services/publicacion.service';
import { ExampleService } from '../../services/example.service';
import { SocialUser, SocialAuthService } from "angularx-social-login";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PublicacionService, ExampleService]
})
export class MainComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  constructor(public publicacionService: PublicacionService, exampleService: ExampleService, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
    this.getPublicaciones();
  }
  // tslint:disable-next-line: typedef
  getPublicaciones() {
    this.publicacionService.getPublicaciones()
      .subscribe(res => {
        this.publicacionService.publicaciones = res as Publicacion[];
        console.log(res);
      });
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
