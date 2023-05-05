package com.example.docente.service;

import java.util.List;
import java.util.Optional;

import com.example.docente.entity.Docente;

public interface DocenteService {
    public List<Docente> listar();

    public Docente guardar(Docente docente);

    public Docente actualizar(Docente docente);

    public Optional<Docente> listarPorId(Integer id);

    public void eliminarPorId(Integer id);
}
