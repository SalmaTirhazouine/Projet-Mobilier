import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../rendezvous.service';
import { Location } from '@angular/common';
import { RendezVous } from '../rendezvous';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendezvouslist',
  templateUrl: './rendezvouslist.component.html',
  styleUrls: ['./rendezvouslist.component.css']
})
export class RendezvouslistComponent implements OnInit {

    openModal(_t15: RendezVous) {
    throw new Error('Method not implemented.');
    }
    
 
  
  rendezvous!: RendezVous[];
  selectedRendezVous:  RendezVous | undefined; 
  isViewOpen = false;
 
  constructor(private rendezvousService: RendezVousService, private router: Router, private location: Location) { }
  

  ngOnInit(): void {
    this.getallRendezVous();
  }


  private getallRendezVous() {
    this.rendezvousService.getallRendezVous().subscribe(
      data => {
        this.rendezvous = data;
        console.log('Données des rendez-vous reçues:', this.rendezvous);
      },
      error => {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
      }
    );
  }
  
  

  delete_RendezVous(id: number) {
    this.rendezvousService.delete_RendezVous(id).subscribe(
      () => {
        console.log('Suppression réussie.');
        this.getallRendezVous();
      },
      (error) => {
        console.error('Erreur lors de la suppression', error);
        this.getallRendezVous(); // Recharger la liste même en cas d'erreur
      }
    );
  }

  viewRendezVous(rendezvous: RendezVous) {
    this.rendezvousService.getRendezVousById(rendezvous.id).subscribe(response => {
      this.selectedRendezVous = response;
      this.isViewOpen = true;
      console.log("Détails du rendez-vous affichés:", this.selectedRendezVous);
    });
  }

  closeModalAndReturn() {
    this.isViewOpen = false;
    this.location.back(); 
  }
  toggleValidation(rendezvous: RendezVous): void {
    const updatedRendezVous = { ...rendezvous, isValidated: !rendezvous.isValidated };
    this.rendezvousService.updateValidation(updatedRendezVous).subscribe(
      (response) => {
        console.log('Validation mise à jour avec succès :', response);
        // Recharger la liste des rendez-vous après la mise à jour
        this.getallRendezVous();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la validation :', error);
      }
    );
  }
  
  
}

  
  

  
  
 