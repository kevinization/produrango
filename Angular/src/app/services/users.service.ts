import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUser: Usuario;
  users: Usuario[];
  readonly URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {
    this.selectedUser = new Usuario();
   }

   // tslint:disable-next-line: typedef
  getUsuarios(){
    return this.http.get(this.URL_API);
  }

  searchUser( id: string){
    console.log(id);
    return this.http.get(this.URL_API + '/' + id);
  }

  // tslint:disable-next-line: typedef
  postUsuario(Usuario: Usuario){
    return this.http.post(this.URL_API, Usuario);
  }

  // tslint:disable-next-line: typedef
  putUsuario(usuario: Usuario){
    return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
  }

  // tslint:disable-next-line: typedef
  deleteUsuario(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
