package com.example.alumno.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alumno.entity.Alumno;

public interface AlumnoRepository extends JpaRepository<Alumno, Integer> {

}
