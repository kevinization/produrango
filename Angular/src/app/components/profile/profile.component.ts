import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { PublicacionService } from '../../services/publicacion.service';
import { UsersService } from '../../services/users.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  name: string;
  photo: string;
  email: string;
  constructor( private publicacionService: PublicacionService, private userService: UsersService, router: Router) {
    if (localStorage.getItem('logged') === 'true'){
      this.id = localStorage.getItem('profile');
      console.log(this.id);
      if (this.id !== null  || this.id !== ''){
        this.userService.searchUser(this.id).subscribe((res: any) => {
          this.name = res.name;
          this.photo = res.foto;
          this.email = res.email;
        });
      }
    }else{
      router.navigateByUrl('login');
    }
  }

  ngOnInit(): void {
  }

}
