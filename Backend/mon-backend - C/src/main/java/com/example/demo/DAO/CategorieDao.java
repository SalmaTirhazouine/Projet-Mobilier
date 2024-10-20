package com.example.demo.DAO;

import com.example.demo.entity.CategorieEntity;
import com.example.demo.repository.CategorieReposotry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategorieDao {

    @Autowired
    private CategorieReposotry categorieReposotry;

    public CategorieEntity AddCategorie(CategorieEntity categorie) {
        return this.categorieReposotry.save(categorie);
    }

    public CategorieEntity addCategorie(CategorieEntity categorie) {
        return categorieReposotry.save(categorie);
    }

    public List<CategorieEntity> addAllCategories(List<CategorieEntity> categories) {
        List<CategorieEntity> addedCategories= new ArrayList<>();
        for (CategorieEntity categorie : categories) {
            addedCategories.add(addCategorie(categorie));
        }
        return addedCategories;
    }

    public void deleteCategorieById(Long categorieId) {
        this.categorieReposotry.deleteById(categorieId);
    }

    public List<CategorieEntity> deleteAllCategories() {
        this.categorieReposotry.deleteAll();
        return null;
    }


    public List<CategorieEntity> getCategories(){
        return this.categorieReposotry.findAll();
    }

}

