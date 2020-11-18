import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from '../../services/publicacion.service';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  lat = 24.0277;
  lng = -104.653;
  zoom = 6;
  draggable = true;
  mapTypeId = 'roadmap';
  located = false;
  limitacionMarcador = 0;

  markers: marker[] = [];

  // tslint:disable-next-line: typedef
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  // tslint:disable-next-line: typedef
  mapClicked($event: MouseEvent) {
    this.limitacionMarcador ++;
    if (this.limitacionMarcador === 1){
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true
      });
    }
    console.log('lat del marcador apenas es colocado: ' + this.lat);
    console.log('lng del marcador apenas es colocado: ' + this.lng);
  }

  // tslint:disable-next-line: typedef
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    console.log('la latitud es: ' + $event.coords.lat);
    console.log('la longitud es: ' + $event.coords.lng);

    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

   // tslint:disable-next-line: typedef
   obtenerPosicionActual(){
    // Obtener posición actual
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
    });
  }

    // tslint:disable-next-line: typedef
    coordsFinales(){
      console.log('LATITUD FINAL: ' + this.lat);
      console.log('LONGITUD FINAL: ' + this.lng);
      // tslint:disable-next-line: no-unused-expression
      this.markers[0].draggable = false;
    }

  constructor(public publicacionService: PublicacionService) {

   }

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
  latitud: number;
  
  longitud: number;
  // tslint:disable-next-line: member-ordering
  denuncias: number;
  // tslint:disable-next-line: member-ordering
  reincidencias: number;
  // tslint:disable-next-line: member-ordering
  user: string;

  ngOnInit(): void {
    this.getPublicaciones();
    this.conectarDatos();
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
  }
    // tslint:disable-next-line: typedef
    addPublicacion(){
      var alerta = document.getElementById('alertaPublicacion');
      alerta.innerHTML = '';
      if(this.markers[0].draggable === false || this.markers.length === 0){
        /// aquí vas a poner los datos que no son necesarios tomar desde el modal, pero aun no
        this.user = 'KEVIN uwu';
        // tslint:disable-next-line: align
        this.publicacionService.postPublicacion(this.titulo, this.fecha, this.categoria,
        this.descripcion, this.archivos, (this.lng).toString(), (this.lat).toString(), this.denuncias, this.reincidencias, this.user).subscribe(res => {
            console.log(res);
            alerta.innerHTML = alerta.innerHTML + "<div class='alert alert-success alert-dismissible fade show' role='alert'>" +
                            "<strong>Publicación añadida con exito </strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                            "<span aria-hidden='true'>&times;</span> </button> </div>";
            this.getPublicaciones();
        });
      }else{
        alerta.innerHTML = alerta.innerHTML + "<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
                            "<strong>Necesita confirmar la ubicación...</strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
                            "<span aria-hidden='true'>&times;</span> </button> </div>";
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
    // tslint:disable-next-line: typedef
    editPublicacion(publicacion: Publicacion) {
      this.publicacionService.selectedPublicacion = publicacion;
    }
    // tslint:disable-next-line: typedef

    deletePublicacion(_id: string){
      if (confirm('¿Estás seguro que quieres eliminarla?')){
        this.publicacionService.deletePublicacion(_id)
          .subscribe(res => {
            console.log(res);
            this.getPublicaciones();
            // Publicacion eliminada satisfactoriamente
        });
      }
    }
}
// tslint:disable-next-line: class-name
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
