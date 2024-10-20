package com.example.demo.DAO;

import com.example.demo.entity.AdminEntity;
import com.example.demo.repository.AdminReposotry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class AdminDao {
    @Autowired
    private AdminReposotry adminReposotry;

    public AdminEntity findByEmail(String email){
        return adminReposotry.findByEmail(email);
    }


}
