package com.example.demo.repository;
import com.example.demo.model.Soldier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SoldierRepository extends JpaRepository<Soldier, Integer>{

}