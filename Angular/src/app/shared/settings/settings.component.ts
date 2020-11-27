import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { COLORS } from 'src/app/data/colors';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  colors = COLORS;
  flag: boolean = false;

  constructor(public _ajustes: SettingsService) {
    if (AppComponent.type === 'Administrador'){
      this.flag = true;
    }
  }

   CambiarColor(color: string, element: string) {
    if (element === 'header') {
      this._ajustes.ajustes.temaEncabezado = color;
    } else if (element === 'sidebar') {
      this._ajustes.ajustes.temaMenuLateral = color;
    }
    this._ajustes.guardarAjustes();
  }

  ngOnInit(): void {
    this._ajustes.cargarAjustes();
  }
  
  ngAfterContentChecked(): void {
    if (AppComponent.type === 'Administrador'){
      this.flag = true;
    }
  }

  seleccionar(event, element) {
    console.log(event.target.dataset.class);
    this.CambiarColor(event.target.dataset.class, element);
  }

}
