package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "rendezvous")
@Data

public class RendezVousEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nomClient;
    private String numeroTelephone;
    private String date;
    private String heure;
    private String message;
    @ManyToOne
    @JoinColumn(name = "client_id")
   private ClientEntity client;
    private boolean isValidated;
}