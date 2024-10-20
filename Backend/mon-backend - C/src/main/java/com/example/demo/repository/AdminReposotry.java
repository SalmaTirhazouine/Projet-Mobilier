package com.example.demo.repository;

import com.example.demo.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminReposotry extends JpaRepository<AdminEntity, Long> {
     AdminEntity findByEmail(String email);

}
