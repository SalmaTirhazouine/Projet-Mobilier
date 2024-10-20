import { Component , OnInit} from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
@Component({
  selector: 'app-vasquelist',
  templateUrl: './vasquelist.component.html',
  styleUrls: ['./vasquelist.component.css']
})
export class VasquelistComponent  implements OnInit  {
  openModal(_t15: Produit) {
  throw new Error('Method not implemented.');
  }
  
  
  
  produit!: Produit[];
  
  selectedProduit: any; 
  isViewOpen = false; 
  
  
  constructor(private produitService:ProduitService,
    private router: Router, private location: Location) { }
  
  ngOnInit(): void {
    /*this.getProduits();*/
    const categorieParDefaut = 'Vasques';
  
   
    this.getProduitsParCategorie(categorieParDefaut);
  }
   
  private getProduitsParCategorie(categorie: string) {
    this.produitService.getProduitsParCategorie(categorie).subscribe(data => {
      this.produit = data;
    });
  }
  
  }