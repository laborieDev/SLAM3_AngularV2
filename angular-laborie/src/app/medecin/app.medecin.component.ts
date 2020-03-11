import { Component } from '@angular/core';
import { DataService } from '../services/app.services.data';

@Component({
  selector: 'app-medecin',
  templateUrl : 'app.medecin.html'
})
export class Medecin {
  legende : string="Rechercher le médecin...";
  lesMedecins : Array<any>;
  lesRapports : Array<any>;
  nomMedecin : string;
  medecin : any;

  lblMessage : string = "Modification effectuée";

  //gestion affichage des divs
  noSecondNavbar : boolean = true;
  afficherMedecins : boolean = false;
  afficherRapports : boolean = false;
  afficherMedecin : boolean = false;
  afficherMessage : boolean = false;

  constructor( private dataService : DataService){}

  charger() : void{
    this.dataService.chargerMedecins(this.nomMedecin)
                    .subscribe( 
                      (data)=>{this.lesMedecins = data;}       
                      ,(error)=>{}
                    );
    this.afficherMedecins = true;
  }

  selectionner(medecin) : void{
    this.medecin = medecin;
    this.noSecondNavbar = false;
    this.dataService.chargerRapports(medecin.id)
                    .subscribe( 
                      (data)=>{this.lesRapports = data;}       
                      ,(error)=>{}
                    );
    this.afficherMedecins = false;
    this.nomMedecin = medecin.nom+" "+medecin.prenom;
    
  }

  derniersRapports(): void{
    this.afficherRapports = true;
    this.afficherMedecin = false;
  }

  estCacheMenu():boolean{
    return this.noSecondNavbar;
  }

  majMedecin(): void{
    this.afficherMedecin = true;
    this.afficherRapports = false;
    this.afficherMessage = false;
  }

  validerMaJMedecin(): void{
    this.dataService.majMedecin(this.medecin.id, this.medecin.adresse, this.medecin.tel, this.medecin.specialitecomplementaire)
                    .subscribe( 
                      (data)=>{}       
                      ,(error)=>{}
                    );
    this.afficherMessage = true;
  }
}