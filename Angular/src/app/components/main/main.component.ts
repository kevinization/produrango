import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import { AppComponent } from 'src/app/app.component';
import { PublicacionesComponent } from '../../modals/publicaciones/publicaciones.component';
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
  private _username = '';
  lt: number = 0;
  lg: number = 0;
  zoom = 15;
  u: number = -104.66528353442382;
  v: number = 24.0094042544207;
  f: boolean;
  markers: marker[] = [];

  public get username() {
    return this._username;
  }
  public set username(value) {
    this._username = value;
  }
  constructor(public publicacionService: PublicacionService, exampleService: ExampleService) { }

  ngOnInit(): void {
    this.f = false;
    this.logged = AppComponent.logged;
    this.getPublicaciones();
  }
  // tslint:disable-next-line: typedef
  getPublicaciones() {
    this.publicacionService.getPublicaciones()
      .subscribe(res => {
        for (let i= 0; i < Object.keys(res).length; i++){
          this.markers.push({
            lat: Number(res[i].latitud),
            lng: Number(res[i].longitud),
            draggable: false
          });
        }
        console.log(this.markers);
        this.publicacionService.publicaciones = res as Publicacion[];
      });
  }
  obtenerDatos(titulo: string, descripcion: string, categoria: string, archivos: string, latitud: number, longitud: number){
    console.log(titulo, descripcion, categoria, archivos, latitud, longitud);
    // tslint:disable-next-line: no-unused-expression
    this.publicacionService.selectedPublicacion.titulo;
     // tslint:disable-next-line: no-unused-expression
    this.publicacionService.selectedPublicacion.descripcion;
     // tslint:disable-next-line: no-unused-expression
    this.publicacionService.selectedPublicacion.categoria;
     // tslint:disable-next-line: no-unused-expression
    this.publicacionService.selectedPublicacion.archivos;
     // tslint:disable-next-line: no-unused-expression
    this.publicacionService.selectedPublicacion.latitud;
     // tslint:disable-next-line: no-unused-expression
    this.publicacionService.selectedPublicacion.longitud;
  }

  getPublicaciones2() {
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

  aumentarDen(_id: string){
    console.log(_id);
    /*this.publicacionService.putDenuncia(_id).subscribe(res => {
      console.log('si funciona');
    });*/
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

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

