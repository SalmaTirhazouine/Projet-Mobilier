package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
@Entity
@Table(name = "Produit")
@Data

public class ProduitEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String description;
    private Double prix;
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "categorie_id")
    @JsonBackReference
   private CategorieEntity categorie;
}