import { Component } from '@angular/core';
import { DataService} from '../services/app.services.data';
import{ Observable } from 'rxjs';
@Component(
  {
    selector: 'my-visites',
    templateUrl: 'app.visiteurs.html'
  }
)
export class Visiteur{
  nomMedecin : string;
  lesMedecins : Array<any>;
  medecin : any;
  gestionAjoutRapport : boolean = false;
  medicamentsSelect: any;
  qteSelect: any;
  

  // compléter en ajoutant les champs présent dans le fichier HTML

  constructor(private dataService : DataService){

  }
  chargerMedecins(){
    // Compléter en appelant la méthode chargerMedecins de DataService en s'inspirant de la partie 3
  }
  selectionnerMedecin(med) : void{
        // Compléter en s'inspirant de la partie 3
  }
  initNouveauRapport(){
       this.nomMedecin ="";
       // compléter initialise les champ losque l'on ajoute un nouveau rapport
   }
   ajouterRapport(): void{
     this.initNouveauRapport();
      this.gestionAjoutRapport = true;
   }
   chargerMedicaments(){
     // appelle la méthode chargerMedicaments du DataService
   }
   choisirMedicament(medicament : any){
      // permet d'afficher le médicament
   }
   ajouter(): void{
      this.medicamentsSelect.push({id : this.medicamentsSelect.id, nom :
      this.medicamentsSelect.nomCommercial, qte : this.qteSelect});
      this.nomMedecin ="";
   }
   retirer() : void{
      this.medicamentsSelect.pop();
   }
   enregistrer(): void{
      // appelle la méthode enregistrerRapport du dataService
      // dans le cas favorable, affiche un message de succès avec des classes CSS "alert alert-success"
      // et dans le cas défavorable, affiche un message avec des classes CSS "alert alert-danger"
   }
}
