package com.example.catalogo.service.impl;

import com.example.catalogo.entity.Categorias;
import com.example.catalogo.repository.CategoriaRepository;
import com.example.catalogo.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaServicelmpl implements CategoriaService {
    @Autowired
    private CategoriaRepository categoriaRepository;

    @Override
    public List<Categorias> listar() {
        return categoriaRepository.findAll();
    }

    @Override
    public Categorias guardar(Categorias categorias) {
        return categoriaRepository.save(categorias);
    }

    @Override
    public Categorias actualizar(Categorias categorias) {
        return categoriaRepository.save(categorias);
    }

    @Override
    public Optional<Categorias> listarPorId(Integer id) {
        return categoriaRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        categoriaRepository.deleteById(id);
    }
}