import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'ionicons/dist/loader';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';
import { RendezVous } from '../rendezvous';
import {RendezVousService} from '../rendezvous.service';
import { Produit } from '../produit';


import { Location } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string = '';
  password: string = '';
  RendezVous: RendezVous = new RendezVous();


  produit!: Produit[];
  rendezvous!:RendezVous[];
  selectedRendezVous: any;
  selectedProduit: any; 
  isViewOpen = false; 
  
  
  constructor(private rendezvousservice:RendezVousService,private produitService:ProduitService,
    private router: Router, private location: Location) { }
  
 
  
    onRendezVousSubmit() {
      this.rendezvousservice.createRendezVous(this.RendezVous).subscribe(
        data => {
          console.log('Rendez-vous enregistré avec succès');
          Swal.fire({
            icon: 'success',
            title: 'Rendez-vous enregistré',
            text: 'Votre demande a bien été reçue. Nous vous appellerons sous peu pour finaliser la prise de rendez-vous.',
            confirmButtonText: 'OK'
          });
          // Réinitialiser le formulaire ou faire d'autres actions si nécessaire
        },
        error => {
          console.error('Erreur lors de l\'enregistrement du rendez-vous', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Il y a eu un problème lors de l\'enregistrement de votre rendez-vous.',
            confirmButtonText: 'OK'
          });
        }
      );
    }

  ngOnInit(): void {
    defineCustomElements(window);
  }
  onSubmit() {
    this.produitService.authenticate(this.email, this.password).subscribe(
      response => {
        
        this.router.navigate(['/homeadmin']); 
        // Action après la connexion réussie
      },
      error => {
        alert('Email ou mot de passe invalide');
      }
    );
  }

 


}

