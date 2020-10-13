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
import { MainComponent } from './components/main/main.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginExampleComponent } from './components/login-example/login-example.component';
import { PublicacionesComponent } from './modals/publicaciones/publicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    LoginComponent,
    UsersComponent,
    SidemenuComponent,
    MainComponent,
    FooterComponent,
    ExamplesComponent,
    LoginExampleComponent,
    PublicacionesComponent
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
