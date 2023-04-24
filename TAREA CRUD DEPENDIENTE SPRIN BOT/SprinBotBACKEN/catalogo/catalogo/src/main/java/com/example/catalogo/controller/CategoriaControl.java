package com.example.catalogo.controller;

import com.example.catalogo.entity.Categorias;
import com.example.catalogo.service.CategoriaService;
// import com.example.catalogo.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/categorias")
public class CategoriaControl {
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping()
    public List<Categorias> listar() {
        return categoriaService.listar();
    }

    @PostMapping()
    public Categorias guardar(@RequestBody Categorias categorias) {
        return categoriaService.guardar(categorias);
    }

    @GetMapping("{id}")
    public Categorias buscarPorId(@PathVariable(required = true) Integer id) {
        return categoriaService.listarPorId(id).get();
    }

    @PutMapping()
    public Categorias actualizar(@RequestBody Categorias categorias) {
        return categoriaService.actualizar(categorias);
    }

    @DeleteMapping("{id}")
    public void eliminarPorId(@PathVariable(required = true) Integer id) {
        categoriaService.eliminarPorId(id);
    }
}
