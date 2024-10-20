
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
@Component({
  selector: 'app-updatefautlist',
  templateUrl: './updatefautlist.component.html',
  styleUrls: ['./updatefautlist.component.css']
})
export class UpdatefautlistComponent implements OnInit{ 



  id!: number;
  produit: Produit = new Produit();
  isUpdating: boolean = false;
  categories: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService:ProduitService
  ) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.produitService.getProduitById(this.id).subscribe(
        data => {
          console.log(data);
          this.produit = data;
        },
        error => console.log(error)
      );
    }
  

    this.getCategories();
}
  getCategories() {
    this.produitService.getCategories().subscribe(data => {
        this.categories = data;
    });
}
  updateProduit() {
    this.isUpdating = true;
    this.produitService.updateProduit(this.id, this.produit).subscribe(
      () => {
        // Redirigez vers la liste des produits après une mise à jour réussie
        this.router.navigate(['/homeadmin']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du produit :', error);
        this.isUpdating = false;
      }
    );
  }

  onsubmit() {
    console.log(this.produit);
    this.updateProduit(); // Appelle la méthode pour mettre à jour le produit
  }
}
 
 