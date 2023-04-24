package com.example.catalogo.service;

import com.example.catalogo.entity.Categorias;
import java.util.List;
import java.util.Optional;

public interface CategoriaService {
    public List<Categorias> listar();

    public Categorias guardar(Categorias categorias);

    public Categorias actualizar(Categorias categorias);

    public Optional<Categorias> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
