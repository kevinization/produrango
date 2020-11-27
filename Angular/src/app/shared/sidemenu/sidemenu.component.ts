import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  flag: boolean = false;
  constructor() {
    if (AppComponent.type === 'Administrador'){
      this.flag = true;
    }
  }

  ngOnInit(): void {
  }

}
