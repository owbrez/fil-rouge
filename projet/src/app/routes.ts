// app/routes.ts
import {Route} from '@angular/router';
import {ListePartiesComponent} from './liste-parties/liste-parties.component';
import {LoginComponent} from './login/login.component';
import {SalleDAttenteComponent} from './salle-d-attente/salle-d-attente.component';
import {SalleDeJeuComponent} from './salle-de-jeu/salle-de-jeu.component';

export const routes:Route[] = [
  {path: '', component:LoginComponent},
  {path: 'listes-des-parties', component:ListePartiesComponent},
  {path: 'salle-d-attente', component:SalleDAttenteComponent},
  {path: 'salle-de-jeu', component:SalleDeJeuComponent}
];


