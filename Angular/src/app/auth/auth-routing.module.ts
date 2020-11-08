import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../modals/login/login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }