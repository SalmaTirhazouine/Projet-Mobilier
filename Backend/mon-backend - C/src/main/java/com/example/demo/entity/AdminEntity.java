package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;
@Entity
@Table(name = "Admin")
@Data

public class AdminEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;
}

