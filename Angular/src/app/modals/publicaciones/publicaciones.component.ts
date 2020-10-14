import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import {NgbModalRef, ModalDismissReasons, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

import { PublicacionService } from '../../services/publicacion.service';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
  providers: [PublicacionService]
})
export class PublicacionesComponent implements OnInit {

  modal: NgbModalRef;

  constructor(public publicacionService: PublicacionService) { }

  ngOnInit(): void {
    this.getPublicaciones();
  }
    // tslint:disable-next-line: typedef
    addPublicacion(form: NgForm) {
      if (form.value._id){
        this.publicacionService.putPublicacion(form.value)
          .subscribe(res => {
            console.log(res);
            this.resetForm(form);
            // Actualizada satisfactoriamente
            this.getPublicaciones();
          });
      }else {
        console.log(form.value);
        this.publicacionService.postPublicacion(form.value)
          .subscribe(res => {
            console.log(res);
            this.resetForm(form);
            // Guardada satisfactoriamente
            this.getPublicaciones();
          });
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
    // tslint:disable-next-line: typedef
    resetForm(form?: NgForm) {
      if (form){
        form.reset();
        this.publicacionService.selectedPublicacion = new Publicacion();
      }
    }

}
