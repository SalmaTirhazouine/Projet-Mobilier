package com.example.demo.repository;

import com.example.demo.entity.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientReposotry extends JpaRepository< ClientEntity, Long> {
}
