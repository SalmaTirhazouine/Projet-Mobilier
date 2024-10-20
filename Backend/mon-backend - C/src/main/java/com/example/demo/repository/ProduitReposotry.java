package com.example.demo.repository;

import com.example.demo.entity.ProduitEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProduitReposotry extends JpaRepository<ProduitEntity, Long> {

    List<ProduitEntity> findByCategorieNom(String categorieNom);
    static void deleteAllProduits() {
    }}
