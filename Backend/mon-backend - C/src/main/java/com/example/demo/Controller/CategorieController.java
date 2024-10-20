package com.example.demo.Controller;

import com.example.demo.DAO.CategorieDao;
import com.example.demo.entity.CategorieEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/Categorie")
@RestController
@CrossOrigin//("http://localhost:4200")
public class CategorieController {

    @Autowired
    private CategorieDao categorieDao;

    @PostMapping(path = "/addCategorie")
    public CategorieEntity addCategorie(@RequestBody CategorieEntity categorie) {
        return this.categorieDao.AddCategorie(categorie);
    }

    @PostMapping(path = "/addAllcat")
    public List<CategorieEntity> addAllCategories(@RequestBody List<CategorieEntity>categories) {
        return this.categorieDao.addAllCategories(categories);
    }
    @PostMapping(path = "/updateCategorie")
    public CategorieEntity updateCategorie(@RequestBody CategorieEntity categorie){
        return this.categorieDao.AddCategorie(categorie);
    }
    @PostMapping(path = "/updateAllsec")
    public List<CategorieEntity> updateAllCategories(@RequestBody List<CategorieEntity> categories) {
        return this.categorieDao.addAllCategories(categories);
    }


    /*@GetMapping("/delete_commande")
    public String deletecom(@RequestParam Long id){
        this.commandeDao.deleteCommandeById(id);
        return "La commande a été supprimée";
    }*/
    @DeleteMapping("/delete_categorie")
    public ResponseEntity<String> deletecat(@RequestParam Long id) {
        categorieDao.deleteCategorieById(id);
        return ResponseEntity.ok("Le secteur a été supprimé");
    }


    @GetMapping("/deleteallcat")
    public List<CategorieEntity> deleteall()
    {
        return this.categorieDao.deleteAllCategories();
    }


    @GetMapping(path = "/getCategories")
    public List<CategorieEntity> getCategories()
    {
        return this.categorieDao.getCategories();
    }



}