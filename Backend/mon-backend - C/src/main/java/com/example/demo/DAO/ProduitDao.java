package com.example.demo.DAO;

import com.example.demo.entity.ProduitEntity;
import com.example.demo.repository.ProduitReposotry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ProduitDao {


    @Autowired
    private ProduitReposotry produitReposotry;

    public ProduitEntity AddProduit(ProduitEntity produit){
        return  this.produitReposotry.save(produit);
    }

    public ProduitEntity addProduit(ProduitEntity produit) {
        return produitReposotry.save(produit);
    }

    public List<ProduitEntity> addAllProduits(List<ProduitEntity> produits) {
        List<ProduitEntity> addedProduits = new ArrayList<>();
        for (ProduitEntity produit : produits) {
            addedProduits.add(addProduit(produit));
        }
        return addedProduits;
    }

    public List<ProduitEntity> getAllProduits(){
        return this.produitReposotry.findAll();
    }

    public ProduitEntity getProduitById(Long produitId) {
        return this.produitReposotry.findById(produitId).orElse(null);
    }

    public void deleteProduitById(Long produitId) {
        this.produitReposotry.deleteById(produitId);
    }

    public List<ProduitEntity> deleteAllProduits() {
        this.produitReposotry.deleteAll();
        return null;
    }


    public List<ProduitEntity> findProduitsByCategorie(String categorie) {
        // Supposons que vous avez une méthode dans votre ProduitRepository qui récupère les produits par nom de catégorie
        return produitReposotry.findByCategorieNom(categorie);
    }
}