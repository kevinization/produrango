import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { AppComponent } from 'src/app/app.component';
import { PublicacionService } from '../../services/publicacion.service';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PublicacionService, AppComponent]
})
export class MainComponent implements OnInit {
  logged: boolean;
  prvd: string;
  private _username = '';
  lt: number = 0;
  lg: number = 0;
  zoom = 15;
  u: number = -104.66528353442382;
  v: number = 24.0094042544207;
  f: boolean;
  just: false;
  pageActual: number = 1;

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
    this.logged = AppComponent.logged;
    if (this.logged === true) {
      this.prvd = AppComponent.provider + '*' + AppComponent.email;
      console.log (this.prvd);
    }
  }
  // tslint:disable-next-line: typedef
  
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

  buscarID(id: string){
    localStorage.setItem('publicacion', id);
  }

  encontrarID(id: string){
    localStorage.setItem('profile', id);
  }

  getPublicaciones() {
    this.publicacionService.getPublicaciones('false')
      .subscribe(res => {
        this.publicacionService.publicaciones = res as Publicacion[];
      });
  }

  ngAfterContentChecked(): void {
    this.logged = AppComponent.logged;
    if (this.logged === true) {
      this.username = AppComponent.user;
      this.prvd = AppComponent.provider + '*' + AppComponent.email;
      console.log (this.prvd);
      
    }
  }

  aumentarDen(Id: string, den: number){
    console.log(Id);
    this.publicacionService.putDenuncia(Id, den).subscribe(res => {
      console.log(res);
    });
  }
}
