package com.example.catalogo.repository;

import com.example.catalogo.entity.Categorias;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categorias, Integer> {
}