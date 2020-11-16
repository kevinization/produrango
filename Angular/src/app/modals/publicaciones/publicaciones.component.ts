import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from '../../services/publicacion.service';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {


  constructor(public publicacionService: PublicacionService) {

   }

  id: string;
  titulo: string;
  fecha: string;
  categoria: string;
  descripcion: string;
  archivos: string;
  ubicacion: string;
  denuncias: number;
  reincidencias: number;
  user: string;

  lat: number;
  lng: number;
  zoom: number;

  ngOnInit(): void {
    this.getPublicaciones();
    this.conectarDatos();

    this.lat = 24.0277;
    this.lng = -104.653;
    this.zoom = 15;

  }

  // tslint:disable-next-line: typedef
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  // tslint:disable-next-line: typedef
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  // tslint:disable-next-line: typedef
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  // tslint:disable-next-line: member-ordering
  markers: marker[] = [
    {
      lat: 24.0279,
      lng: -104.67,
      label: 'A',
      draggable: true
    },
  ];



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
  posicionMarcador(){

  }







  // tslint:disable-next-line: typedef
  conectarDatos(){
    this.id = this.publicacionService.selectedPublicacion._id;
    this.titulo = this.publicacionService.selectedPublicacion.titulo;
    this.fecha = this.publicacionService.selectedPublicacion.fecha;
    this.categoria = this.publicacionService.selectedPublicacion.categoria;
    this.descripcion = this.publicacionService.selectedPublicacion.descripcion;
    this.archivos = this.publicacionService.selectedPublicacion.archivos;
    this.ubicacion = this.publicacionService.selectedPublicacion.ubicacion;
    this.denuncias = this.publicacionService.selectedPublicacion.denuncias;
    this.reincidencias = this.publicacionService.selectedPublicacion.reincidencias;
  }
    // tslint:disable-next-line: typedef
    addPublicacion(){
      /// aquí vas a poner los datos que no son necesarios tomar desde el modal, pero aun no
      this.user = 'KEVIN uwu';
        // tslint:disable-next-line: align
        this.publicacionService.postPublicacion(this.titulo, this.fecha, this.categoria,
        this.descripcion, this.archivos, this.ubicacion, this.denuncias, this.reincidencias, this.user).subscribe(res => {
            console.log(res);
            this.getPublicaciones();
        });
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
    // tslint:disable-next-line: typedef
    resetForm(form?: NgForm) {
      if (form){
        form.reset();
        this.publicacionService.selectedPublicacion = new Publicacion();
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
