import { Component } from '@angular/core';
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
    
    valider():void{
        if(this.login == "laborie" && this.password == "anthony"){

        }
        else{
            this.lblMessage = "Identifiant ou mot de passe incorrect";
            this.noErreur = false;
        }
    }

    estCache():boolean{
        return this.noErreur;
    }
}
