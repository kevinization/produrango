import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from '../../services/publicacion.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AppComponent } from 'src/app/app.component';
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  lng: string;
  lat: string;
  private geoCoder;
  flag: boolean;
  draggable: boolean = true;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(public publicacionService: PublicacionService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone ) {}
  // tslint:disable-next-line: member-ordering
  id: string;
  // tslint:disable-next-line: member-ordering
  titulo: string;
  // tslint:disable-next-line: member-ordering
  fecha: string;
  // tslint:disable-next-line: member-ordering
  categoria: string;
  // tslint:disable-next-line: member-ordering
  descripcion: string;
  // tslint:disable-next-line: member-ordering
  archivos: string;
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: member-ordering
  denuncias: number;
  // tslint:disable-next-line: member-ordering
  reincidencias: number;
  // tslint:disable-next-line: member-ordering
  user: string;
  // tslint:disable-next-line: typedef
  provider: string;
  ngOnInit() {
    this.getPublicaciones();
    this.conectarDatos();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // tslint:disable-next-line: new-parens
      this.geoCoder = new google.maps.Geocoder;
      // tslint:disable-next-line: prefer-const
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          // tslint:disable-next-line: prefer-const
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
          return;
          }
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  // Get Current Location Coordinates
  // tslint:disable-next-line: typedef
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  // tslint:disable-next-line: typedef
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  // tslint:disable-next-line: typedef
  getAddress(latitude, longitude) {
    // tslint:disable-next-line: object-literal-key-quotes
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
            window.alert('No results found');
          }
      } else {
          window.alert('Geocoder failed due to: ' + status);
        }
    });
  }

  // tslint:disable-next-line: typedef
  confirmarDireccion(){
    console.log('La latitud es: ' + this.latitude);
    console.log('La longitud es: ' + this.longitude);
    console.log('Draggable es: ' + this.draggable);
    this.draggable = false;
    console.log('Como ya pulsé el botón, ahora draggable es: ' + this.draggable);
  }

  // tslint:disable-next-line: typedef
  conectarDatos(){
    this.id = this.publicacionService.selectedPublicacion._id;
    this.titulo = this.publicacionService.selectedPublicacion.titulo;
    this.fecha = this.publicacionService.selectedPublicacion.fecha;
    this.categoria = this.publicacionService.selectedPublicacion.categoria;
    this.descripcion = this.publicacionService.selectedPublicacion.descripcion;
    this.archivos = this.publicacionService.selectedPublicacion.archivos;
    this.denuncias = this.publicacionService.selectedPublicacion.denuncias;
    this.reincidencias = this.publicacionService.selectedPublicacion.reincidencias;
    this.latitude = (this.publicacionService.selectedPublicacion.latitud);
    this.longitude = this.publicacionService.selectedPublicacion.longitud;
    this.provider = AppComponent.provider;
  }


    // tslint:disable-next-line: typedef
    addPublicacion(){
      var alerta = document.getElementById('alertaPublicacion');
      alerta.innerHTML = '';
       if(this.draggable === false){
        /// aquí vas a poner los datos que no son necesarios tomar desde el modal, pero aun no
        this.lat = (this.latitude).toString();
        this.lng = (this.longitude).toString();
        this.user = AppComponent.user;
        // tslint:disable-next-line: align
        this.publicacionService.postPublicacion(this.titulo, this.fecha, this.categoria,
        this.descripcion, this.archivos, this.latitude, this.longitude, this.denuncias,
        this.reincidencias, this.user).subscribe(res => {
            console.log(res);
            alerta.innerHTML = alerta.innerHTML + '<div class=\'alert alert-success alert-dismissible fade show\' role=\'alert\'>' +
                            '<strong>Publicación añadida con exito </strong><button type=\'button\' class=\'close\' data-dismiss=\'alert\' aria-label=\'Close\'>' +
                            '<span aria-hidden=\'true\'>&times;</span> </button> </div>';
            this.getPublicaciones();
        });
      }else{
        alerta.innerHTML = alerta.innerHTML + '<div class=\'alert alert-danger alert-dismissible fade show\' role=\'alert\'>' +
                            '<strong>Necesita confirmar la ubicación...</strong><button type=\'button\' class=\'close\' data-dismiss=\'alert\' aria-label=\'Close\'>' +
                            '<span aria-hidden=\'true\'>&times;</span> </button> </div>';
      } 
    }
    // tslint:disable-next-line: typedef
    getPublicaciones() {
      this.publicacionService.getPublicaciones()
        .subscribe(res => {
          this.publicacionService.publicaciones = res as Publicacion[];
          console.log(res);
        });
    }
    updatePublicacion(){
      console.log(this.id);
      this.publicacionService.putPublicacion(this.id, this.titulo, this.fecha, this.categoria,
        this.descripcion, this.archivos, this.latitude, this.longitude).subscribe(res =>{
          console.log(res);
        });
    }

    // tslint:disable-next-line: typedef
    deletePublicacion(){
      this.id = MainComponent.id;
      this.publicacionService.deletePublicacion(this.id)
          .subscribe(res => {
            console.log(res);
            this.getPublicaciones();
            // Publicacion eliminada satisfactoriamente
      });
    }
    ngAfterContentChecked(): void {
      this.flag = MainComponent.flag;
      if (this.flag === true) {
        this.id = MainComponent.id;
        this.titulo = MainComponent.titulo;
        this.descripcion = MainComponent.descripcion;
        this.categoria = MainComponent.categoria;
        this.archivos = MainComponent.archivos;
        this.latitude = MainComponent.latitud;
        this.longitude = MainComponent.longitud;
        MainComponent.flag = false;
      }
    }
}

