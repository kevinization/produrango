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
<<<<<<< HEAD
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
=======
import { ExamplesComponent } from './components/examples/examples.component';
>>>>>>> fe8b4f1f1fa63c3113631d36bc5515d82fbd0874

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    LoginComponent,
    UsersComponent,
<<<<<<< HEAD
    SidemenuComponent
=======
    ExamplesComponent
>>>>>>> fe8b4f1f1fa63c3113631d36bc5515d82fbd0874
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
