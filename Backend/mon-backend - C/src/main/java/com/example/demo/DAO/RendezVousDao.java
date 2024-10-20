package com.example.demo.DAO;


import com.example.demo.entity.RendezVousEntity;
import com.example.demo.repository.RendezVousReposotry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RendezVousDao {

    @Autowired
    private RendezVousReposotry rendezVousReposotry;
    public List<RendezVousEntity> getallRendezVous(){
        return this.rendezVousReposotry.findAll();
    }
    public RendezVousEntity getRendezVousById(Long rendezvousId) {
        return this.rendezVousReposotry.findById(rendezvousId).orElse(null);
    }

    public RendezVousEntity createRendezVous(RendezVousEntity rendezVous) {
        return rendezVousReposotry.save(rendezVous);
    }
    public RendezVousEntity AddRendezVous(RendezVousEntity rendezVous){
        return  this.rendezVousReposotry.save(rendezVous);
    }

    public void deleteRendezVousById(Long rendezVousId) {
        this.rendezVousReposotry.deleteById(rendezVousId);
    }

}
