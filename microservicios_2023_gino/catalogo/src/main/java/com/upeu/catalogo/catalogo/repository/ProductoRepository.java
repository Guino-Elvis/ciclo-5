package com.upeu.catalogo.catalogo.repository;

import com.upeu.catalogo.catalogo.entity.Producto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    // esto es para que se vea las categoiras en productops
    // @Query("SELECT p FROM Producto p JOIN FETCH p.categoria")
    // List<Producto> findAllWithCategory();
}
