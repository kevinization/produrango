import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos para login con red social
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { UsersComponent } from './components/users/users.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { MainComponent } from './components/main/main.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PublicacionesComponent } from './modals/publicaciones/publicaciones.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    UsersComponent,
    SidemenuComponent,
    MainComponent,
    FooterComponent,
    ExamplesComponent,
    PublicacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '498288086027-8of43cd1km2rpadvvpq5jq38bei5g77a.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2938587303055008'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'clientId'
            ),
          },
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
