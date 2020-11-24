import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/user';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

    // tslint:disable-next-line: typedef
    addUsuarios(form: NgForm) {
      console.log(form.value);
      if (form.value._id){
        this.userService.putUsuario(form.value)
          .subscribe(res => {
            console.log(res);
            this.resetForm(form);
            // Actualizado satisfactoriamente
            this.getUsuarios();
          });
      }else {
        console.log(form.value);
        this.userService.postUsuario(form.value)
          .subscribe(res => {
            console.log(res);
            this.resetForm(form);
            // Guardado satisfactoriamente
            this.getUsuarios();
          });
      }
    }

      // tslint:disable-next-line: typedef
  getUsuarios() {
    this.userService.getUsuarios()
      .subscribe(res => {
        this.userService.users = res as Usuario[];
        console.log(res);
      });
  }

    // tslint:disable-next-line: typedef
    editUsuario(usuario: Usuario) {
      this.userService.selectedUser = usuario;
    }

      // tslint:disable-next-line: typedef
  deleteUsuario(_id: string){
    if (confirm('¿Estás seguro que quieres eliminarlo?')){
      this.userService.deleteUsuario(_id)
        .subscribe(res => {
          console.log(res);
          this.getUsuarios();
          // Usuario eliminado satisfactoriamente
      });
    }
  }

  // tslint:disable-next-line: typedef
  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.userService.selectedUser = new Usuario();
    }
  }


}
