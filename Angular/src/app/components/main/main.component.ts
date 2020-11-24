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

  private static _id: string = '';
  static get id(): string {
    return MainComponent._id;
  }
  static set id(value: string) {
    MainComponent._id = value;
  }

  private static _titulo: string = '';
  static get titulo(): string {
    return MainComponent._titulo;
  }
  static set titulo(value: string) {
    MainComponent._titulo = value;
  }
  private static _categoria: string = '';
  static get categoria(): string {
    return MainComponent._categoria;
  }
  static set categoria(value: string) {
    MainComponent._categoria = value;
  }

  private static _descripcion: string = '';
  static get descripcion(): string {
    return MainComponent._descripcion;
  }
  static set descripcion(value: string) {
    MainComponent._descripcion = value;
  }

  private static _archivos: string = '';
  static get archivos(): string {
    return MainComponent._archivos;
  }
  static set archivos(value: string) {
    MainComponent._archivos = value;
  }

  private static _latitud: number = null;
  static get latitud(): number {
    return MainComponent._latitud;
  }
  static set latitud(value: number) {
    MainComponent._latitud = value;
  }

  private static _longitud: number = null;
  static get longitud(): number {
    return MainComponent._longitud;
  }
  static set longitud(value: number) {
    MainComponent._longitud = value;
  }

  private static _flag: boolean = false;
  static get flag(): boolean {
    return MainComponent._flag;
  }
  static set flag(value: boolean) {
    MainComponent._flag = value;
  }

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
  
  obtenerDatos(id: string, titulo: string, descripcion: string, categoria: string, archivos: string, latitud: number, longitud: number){
    MainComponent.id = id;
    MainComponent.titulo = titulo;
    MainComponent.descripcion = descripcion;
    MainComponent.categoria = categoria;
    MainComponent.archivos = archivos;
    MainComponent.latitud = latitud;
    MainComponent.longitud = longitud;
    MainComponent.flag = true;
  }
  obtenerId(id: string){
    MainComponent.id = id;
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

