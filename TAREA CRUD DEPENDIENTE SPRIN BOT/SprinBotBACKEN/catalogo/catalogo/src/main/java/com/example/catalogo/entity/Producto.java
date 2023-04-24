package com.example.catalogo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String Nombre;
    private String Descripccion;
    private String Detalles;
    private Double Precio;
    private String Oferta;
    private String Color;
    private String Talla;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Categorias_id")
    private Categorias categorias;
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "Categorias_id")
    // private Categorias categorias;

}
