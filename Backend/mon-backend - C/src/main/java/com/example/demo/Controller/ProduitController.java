package com.example.demo.Controller;

import com.example.demo.DAO.ProduitDao;
import com.example.demo.entity.ProduitEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/Produit")
@RestController
@CrossOrigin//("http://localhost:4200")

public class ProduitController {


    @Autowired
    private ProduitDao produitDao;

    @PostMapping(path = "/addProduit")
    public ProduitEntity addProduit(@RequestBody ProduitEntity produit){
        return this.produitDao.AddProduit(produit);
    }
    @PostMapping(path = "/addAll")
    public List<ProduitEntity> addAllProduits(@RequestBody List<ProduitEntity> produits) {
        return this.produitDao.addAllProduits(produits);
    }
    @PostMapping(path = "/updateProduit")
    public ProduitEntity updateProduit(@RequestBody ProduitEntity produit){
        return this.produitDao.AddProduit(produit);
    }

    @PostMapping(path = "/updateAll")
    public List<ProduitEntity> updateAllProduits(@RequestBody List<ProduitEntity> produits) {
        return this.produitDao.addAllProduits(produits);
    }

    /*@GetMapping("/delete_article")
     public String deleteprod(@RequestParam Long id){
          this.articleDao.deleteArticleById(id);
          return "Le produit a été supprimé";
     }\*/
    @DeleteMapping("/delete_produit")
    public ResponseEntity<String> deleteProduit(@RequestParam Long id) {
        produitDao.deleteProduitById(id);
        return ResponseEntity.ok("Le produit a été supprimé");
    }


    @GetMapping("/deleteall")
    public List<ProduitEntity> deleteall()
    {
        return this.produitDao.deleteAllProduits();
    }


    @GetMapping(path = "/getall")
    public List<ProduitEntity> getall()
    {
        return this.produitDao.getAllProduits();
    }

    @GetMapping("/getProduit")
    public ProduitEntity getprod(@RequestParam Long id){
        return this.produitDao.getProduitById(id);
    }



    @GetMapping("/parCategorie")
    public List<ProduitEntity> getProduitsParCategorie(@RequestParam String categorie) {
        return produitDao.findProduitsByCategorie(categorie);
    }
}