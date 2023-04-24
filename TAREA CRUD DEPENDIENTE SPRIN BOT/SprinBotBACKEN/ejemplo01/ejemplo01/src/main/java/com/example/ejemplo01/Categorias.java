package com.example.ejemplo01;

import jakarta.persistence.*;

@Entity
@Table(name = "categorias")
/**
 *
 * @author pc
 */
public class Categorias {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    /**
     *
     */
    @Column
    private String Nombre;
    @Column
    private String Slug;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public String getSlug() {
        return Slug;
    }

    public void setSlug(String Slug) {
        this.Slug = Slug;
    }

}
