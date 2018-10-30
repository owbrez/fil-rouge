import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListePartiesComponent } from './liste-parties/liste-parties.component';
import { SalleDAttenteComponent } from './salle-d-attente/salle-d-attente.component';
import { SalleDeJeuComponent } from './salle-de-jeu/salle-de-jeu.component';
import { AvatarComponent } from './avatar/avatar.component';
import {routes} from './routes'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListePartiesComponent,
    SalleDAttenteComponent,
    SalleDeJeuComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
