package com.example.demo.repository;

import com.example.demo.entity.CategorieEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieReposotry extends JpaRepository<CategorieEntity, Long> {

    static void deleteAllCategories() {
    }
}



