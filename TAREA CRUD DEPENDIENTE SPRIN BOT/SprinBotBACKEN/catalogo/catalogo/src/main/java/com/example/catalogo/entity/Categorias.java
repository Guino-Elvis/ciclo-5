package com.example.catalogo.entity;

import java.util.ArrayList;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Categorias")
public class Categorias {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String Nombre;
    private String Slug;

    /**
     *
     */
    @OneToMany(mappedBy = "categorias")
    List<Producto> producto;

    // @OneToMany(mappedBy = "categorias", cascade = CascadeType.ALL, orphanRemoval
    // = true)
    // private List<Producto> producto = new ArrayList<>();

}
