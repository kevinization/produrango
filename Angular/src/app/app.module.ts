import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
<<<<<<< HEAD
import { FooterComponent } from './shared/footer/footer.component';
=======
import { ExamplesComponent } from './components/examples/examples.component';
>>>>>>> a5d98359d748dc56791fd2e9ba214bb16680df82

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    LoginComponent,
    UsersComponent,
    SidemenuComponent,
    MainComponent,
<<<<<<< HEAD
    FooterComponent
=======
    ExamplesComponent
>>>>>>> a5d98359d748dc56791fd2e9ba214bb16680df82
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
