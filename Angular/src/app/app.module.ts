import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
<<<<<<< HEAD
import { MainComponent } from './components/main/main.component';
=======
import { ExamplesComponent } from './components/examples/examples.component';
>>>>>>> 6162fb60f1f7cf7fe7d669b8e3601da3901711e1

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    LoginComponent,
    UsersComponent,
    SidemenuComponent,
<<<<<<< HEAD
    MainComponent
=======
    ExamplesComponent
>>>>>>> 6162fb60f1f7cf7fe7d669b8e3601da3901711e1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
