package com.example.inscripccion.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.inscripccion.entity.Inscripccion;
import com.example.inscripccion.repository.InscripccionRepository;
import com.example.inscripccion.service.InscripccionService;

import java.util.List;
import java.util.Optional;

@Service
public class InscripccionServiceImpl implements InscripccionService {
    @Autowired
    private InscripccionRepository inscripccionRepository;

    @Override
    public List<Inscripccion> listar() {
        return inscripccionRepository.findAll();
    }

    @Override
    public Inscripccion guardar(Inscripccion inscripccion) {
        return inscripccionRepository.save(inscripccion);
    }

    @Override
    public Inscripccion actualizar(Inscripccion inscripccion) {
        return inscripccionRepository.save(inscripccion);
    }

    @Override
    public Optional<Inscripccion> listarPorId(Integer id) {
        return inscripccionRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        inscripccionRepository.deleteById(id);
    }
}
