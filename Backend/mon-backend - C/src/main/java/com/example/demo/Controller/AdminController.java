package com.example.demo.Controller;

import com.example.demo.DAO.AdminDao;
import com.example.demo.entity.AdminEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RequestMapping(path = "/Admin")
@RestController

public class AdminController {
    @Autowired
    private AdminDao adminDao;

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestParam("email") String email, @RequestParam("password") String password) {
        AdminEntity admin = adminDao.findByEmail(email);
        if (admin != null && admin.getPassword().equals(password)) {
            // Connexion réussie
            return ResponseEntity.ok().body("Connexion réussie");
        } else {
            // Échec de la connexion
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou mot de passe invalide");
        }
    }
}