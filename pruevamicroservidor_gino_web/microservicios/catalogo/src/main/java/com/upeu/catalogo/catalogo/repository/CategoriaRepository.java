package com.upeu.catalogo.catalogo.repository;

import com.upeu.catalogo.catalogo.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}
