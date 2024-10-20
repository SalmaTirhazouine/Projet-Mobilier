
import { Component , OnInit} from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-vasquelistadmin',
  templateUrl: './vasquelistadmin.component.html',
  styleUrls: ['./vasquelistadmin.component.css']
})
export class VasquelistadminComponent  implements OnInit  {
  openModal(_t15: Produit) {
  throw new Error('Method not implemented.');
  }
  
  
  
  produit!: Produit[];
  selectedCategorie: string = 'Vasques'; 
  //selectedCategorie: any; 
  selectedProduit: any; 
  isViewOpen = false; 
 
  
  constructor(private produitService:ProduitService,
    private router: Router, private location: Location) { }
    ngOnInit(): void {
      /*this.getProduits();*/
      //const categorieParDefaut = 'Fauteuils';
    
     
      this.getProduitsParCategorie(this.selectedCategorie);
    }
     /*
    private getProduits() {
      this.produitService.getProduitsList().subscribe(data => {
        this.produit = data;
      });
    }*/
    private getProduitsParCategorie(categorie: string) {
      this.produitService.getProduitsParCategorie(categorie).subscribe(data => {
        this.produit = data;
      });
    }
  
  
  updateProduit(id?: number) {
    this.router.navigate(['updatefautlist', id]);
  
  }
   
  
    deleteProduit(id: number) {
      this.produitService.deleteProduit(id).subscribe(
        () => {
          console.log('Suppression réussie.');
          
          this.getProduitsParCategorie(this.selectedCategorie);
        },
        (error) => {
          console.error('Erreur de suppression', error);
          
          this.getProduitsParCategorie(this.selectedCategorie);
        }
      );
    }
  
  
  
    viewProduit(produit: Produit) {
      this.produitService.getProduitById(produit.id)
        .subscribe(response => {
          this.selectedProduit = response;
          this.isViewOpen = true;
          console.log("isViewOpen:", this.isViewOpen);
        });
    }
    
  closeModalAndReturn() {
    this.isViewOpen = false;
    this.location.back(); 
  }
  }
  