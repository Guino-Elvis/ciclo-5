/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.ejemplo01;

import java.util.List;

/**
 *
 * @author pc
 */
public interface CategoriaService {
    
    List<Categorias>listar();
    Categorias listarId(int id);
    Categorias add(Categorias c);
    Categorias edit(Categorias c);
    Categorias delete(int id);
    
}
