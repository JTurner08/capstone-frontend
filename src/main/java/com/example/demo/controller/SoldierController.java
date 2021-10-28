package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.SoldierRepository;
import com.example.demo.model.Soldier;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class SoldierController {

	@Autowired
	private SoldierRepository soldierRepository;
	
	// get all Soldier
	
	@GetMapping("/soldiers")
	public List<Soldier> getAllSoldiers(){
		return soldierRepository.findAll();
		
	}
	@PostMapping("/add-soldier")
	public Soldier addSoldier(@RequestBody Soldier soldier) {
		return soldierRepository.save(soldier);
	}

//create soldier rest api
//	@PostMapping("/soldier")
//	public Soldier createSoldier(@RequestBody Soldier soldier) {
//		return soldierRepository.save(soldier);
//	}
	
	// get soldier by id rest api
		@GetMapping("/soldier/{id}")
		public ResponseEntity<Soldier> getSoldierById(@PathVariable int id) {
			Soldier soldier = soldierRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Soldier not exist with id :" + id));
			return ResponseEntity.ok(soldier);
		}	
		
// update soldier rest api
		
		@PutMapping("/soldiers/{id}")
		public ResponseEntity<Soldier> updateSoldier(@PathVariable int id, @RequestBody Soldier soldierDetails){
			Soldier soldier = soldierRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Soldier not exist with id :" + id));
			
			soldier.setFirstName(soldierDetails.getFirstName());
			soldier.setLastName(soldierDetails.getLastName());
			soldier.setRank(soldierDetails.getRank());
			soldier.setSkill(soldierDetails.getSkill());
			
			Soldier updatedSoldier = soldierRepository.save(soldier);
			return ResponseEntity.ok(updatedSoldier);
		}		
		
		// delete soldier rest api
		@DeleteMapping("/soldier/{id}")
		public String deleteSoldier(@PathVariable int id)
		{
			 soldierRepository.findById(id).orElseThrow(() ->  new ResourceNotFoundException("soldier not found"));
			 soldierRepository.deleteById(id);
		    return "The soldier with id: "+ id +" is removed from the database.";
		}
}