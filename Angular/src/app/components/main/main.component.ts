import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import { Example } from 'src/app/models/example';

import { PublicacionService } from '../../services/publicacion.service';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PublicacionService, ExampleService]
})
export class MainComponent implements OnInit {

  constructor(public publicacionService: PublicacionService, exampleService: ExampleService) { }

  ngOnInit(): void {
    this.getPublicaciones();
    this.getUsuarios();
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
    getUsuarios() {
      this.publicacionService.getExamples()
        .subscribe(res => {
          this.publicacionService. = res as Example[];
          console.log(res);
        });
    }

}
