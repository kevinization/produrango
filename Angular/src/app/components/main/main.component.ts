import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';

import { PublicacionService } from '../../services/publicacion.service';
<<<<<<< HEAD
import { ExampleService } from '../../services/example.service';
import { SocialUser, SocialAuthService } from "angularx-social-login";
=======
>>>>>>> d8a3a4d332d5e932f53ee67f56dcf0033ed21b14

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PublicacionService]
})
export class MainComponent implements OnInit {
<<<<<<< HEAD
  user: SocialUser;
  loggedIn: boolean;
  constructor(public publicacionService: PublicacionService, exampleService: ExampleService, private authService: SocialAuthService) { }
=======

  constructor(public publicacionService: PublicacionService) { }
>>>>>>> d8a3a4d332d5e932f53ee67f56dcf0033ed21b14

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
<<<<<<< HEAD
    // tslint:disable-next-line: typedef
    /*/getUsuarios() {
      this.publicacionService.getExamples()
        .subscribe(res => {
          this.publicacionService. = res as Example[];
          console.log(res);
        });
    }*/

=======
>>>>>>> d8a3a4d332d5e932f53ee67f56dcf0033ed21b14
}
