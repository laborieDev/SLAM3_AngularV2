import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/app.services.data';

@Component({
  selector: 'app-connexion',
  templateUrl : 'app.connexion.html',
  styleUrls: ['app.connexion.css']
})

export class ConnexionComponent {
    titre : string="Connexion";
    login : string;
    password : string;
    lblMessage : string;
    noErreur : boolean = true;
    visiteur: any;
    constructor(private dataService : DataService, private router : Router){};

    valider():void{
        this.dataService.connexion(this.login, this.password)
            .subscribe(
                (data) => {
                    this.dataService.visiteur = data;
                    this.router.navigate(['accueil']);
                },
                (error) => { 
                    this.lblMessage = "Identifiant ou mot de passe incorrect";
                    this.noErreur = false;}
            );
    }

    estCache():boolean{
        return this.noErreur;
    }
}
