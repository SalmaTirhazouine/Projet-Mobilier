
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent  implements OnInit {
  
  Id!: number;

 

  
  produit: Produit = new Produit();
  isCreating: boolean = false;
  categories: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) { }

  ngOnInit() {
    this.getCategories();
}

getCategories() {
    this.produitService.getCategories().subscribe(data => {
        this.categories = data;
    });
}
createProduit() {
  this.isCreating = true;
  
  this.produitService.createProduit(this.produit).subscribe(
    () => {
      this.isCreating = false;  // Réinitialisez le drapeau de création
      this.router.navigate(['/homeadmin']);
    },
    error => {
      this.isCreating = false;  // Réinitialisez le drapeau de création en cas d'erreur
      console.error('Erreur lors de la création du produit', error);
    }
  );
}

onsubmit() {
  console.log(this.produit);
  this.createProduit(); // Assurez-vous que la méthode du service est correctement appelée
}

  
}
