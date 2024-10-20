package com.example.demo.entity;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "Client")
@Data
public class ClientEntity {
    @Id
    private Long id;
    private String nom;
    private String numeroTelephone;


    @OneToMany(mappedBy = "client")
   private List<RendezVousEntity> rendezVous;

    // Constructeurs, getters et setters
}