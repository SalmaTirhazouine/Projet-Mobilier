
import { Component , OnInit} from '@angular/core';
import { Produit } from '../produit';
import { RendezVous } from '../rendezvous';
import { RendezVousService } from '../rendezvous.service';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit  {
onSubmit() {
throw new Error('Method not implemented.');

}

RendezVous: RendezVous = new RendezVous();

openModal(_t15: Produit) {
throw new Error('Method not implemented.');
}



produit!: Produit[];
rendezvous!:RendezVous[];
selectedRendezVous: any;
selectedProduit: any; 
isViewOpen = false; 


constructor(private rendezvousservice:RendezVousService,
  private router: Router, private location: Location) { }

ngOnInit(): void {
  
}




onSubmitt() {
  console.log(this.RendezVous); 
  this.rendezvousservice.createRendezVous(this.RendezVous).subscribe(data => {
    console.log('Rendez-vous enregistré avec succès');
    // Ajoutez des actions supplémentaires, comme rediriger ou afficher un message de confirmation
  }, error => {
    console.error('Erreur lors de l\'enregistrement du rendez-vous', error);
  });
}


}
