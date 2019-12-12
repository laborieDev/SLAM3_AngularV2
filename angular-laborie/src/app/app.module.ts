import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/app.connexion.component';
import { Navbar } from './navbar/app.navbar.component';
import { Medecin } from './medecin/app.medecin.component';
import { Visiteur } from './visiteurs/app.visiteurs.component';

const appRoutes: Routes = [
  {path : '', component: ConnexionComponent},
  {path : 'medecins', component: Medecin},
  {path : 'visiteurs', component : Visiteur},
  {path : 'accueil', component : Navbar}
];

@NgModule({
  declarations: [
    AppComponent, ConnexionComponent, Navbar, Medecin, Visiteur
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
