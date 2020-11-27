import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  flag: string = 'true';
  id: string;
  titulo: string;
   descripcion: string;
   categoria: string;
   archivos: string;
   latitud: number;
   longitud: number;
   nombre: string;
  fecha:string;

  constructor(public publicacionService: PublicacionService) {
    this.id = localStorage.getItem('publicacion');
    console.log(this.id);
    if (this.id !== null  || this.id !== ''){
        this.publicacionService.getPublicacion(this.id).subscribe((res: any) => {
          this.titulo = res.titulo;
          this.descripcion = res.descripcion;
          this.categoria = res.categoria;
          this.archivos = res.archivos;
          this.fecha = res.fecha;
          this.nombre = res.nombre;  
        });
    }
  }

  ngOnInit(): void {
  }

      // tslint:disable-next-line: typedef
}
