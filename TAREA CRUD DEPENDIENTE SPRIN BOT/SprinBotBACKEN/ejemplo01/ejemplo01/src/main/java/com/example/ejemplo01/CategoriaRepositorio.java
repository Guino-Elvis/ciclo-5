/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.ejemplo01;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author pc
 */
public interface CategoriaRepositorio extends Repository<Categorias, Integer> {
    List<Categorias> findAll();

    Categorias findOne(int id);

    Categorias save(Categorias c);

    void delete(Categorias c);
}
