package com.example.docente.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.docente.entity.Docente;

public interface DocenteRepository extends JpaRepository<Docente, Integer> {

}
