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
    
    valider():void{
        if(this.login != "laborie" || this.password != "anthony")
            console.log("OK");
        else
            console.log("erreur");
    }
}
