package com.example.demo.Controller;

import com.example.demo.DAO.RendezVousDao;
import com.example.demo.entity.RendezVousEntity;
import com.example.demo.repository.ClientReposotry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/rendezvous")
@RestController
@CrossOrigin//("http://localhost:4200")
public class RendezVousController {

    @Autowired
    private ClientReposotry clientReposotry;
    @Autowired
    private RendezVousDao rendezVousDao;

    @GetMapping(path = "/getallRendezVous")
    public List<RendezVousEntity> getallRendezVous() {
        return this.rendezVousDao.getallRendezVous();
}




    @GetMapping("/getRendezVousById")
    public RendezVousEntity getRendezVousById(@RequestParam Long id){
        return this.rendezVousDao.getRendezVousById(id);
    }

    @PostMapping(path = "/addRendezVous")
    public RendezVousEntity addRendezVous(@RequestBody RendezVousEntity rendezVous){
        return this.rendezVousDao.AddRendezVous(rendezVous);
    }


    @DeleteMapping("/delete_RendezVous")
    public ResponseEntity<String> deleteRendezVous(@RequestParam Long id) {
        rendezVousDao. deleteRendezVousById(id);
        return ResponseEntity.ok("Le RendezVous a été supprimé");
    }


    @PostMapping(path = "/createRendezVous")
    public ResponseEntity<RendezVousEntity> createRendezVous(@RequestBody RendezVousEntity rendezVous) {
        System.out.println("Rendez-vous reçu : " + rendezVous);
        RendezVousEntity savedRendezVous = rendezVousDao.createRendezVous(rendezVous);
        return ResponseEntity.ok(savedRendezVous);
    }


    @PostMapping(path = "/updateValidation")
    public ResponseEntity<RendezVousEntity> updateValidation(@RequestBody RendezVousEntity rendezVous) {
        System.out.println("Rendez-vous reçu pour mise à jour : " + rendezVous); // Ajoutez cette ligne pour déboguer
        RendezVousEntity existingRendezVous = rendezVousDao.getRendezVousById(rendezVous.getId());
        if (existingRendezVous != null) {
            existingRendezVous.setValidated(rendezVous.isValidated());
            RendezVousEntity updatedRendezVous = rendezVousDao.createRendezVous(existingRendezVous); // Utilisez createRendezVous pour sauvegarder
            return ResponseEntity.ok(updatedRendezVous);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
