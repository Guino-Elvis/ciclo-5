package com.example.docente.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.docente.entity.Docente;
import com.example.docente.repository.DocenteRepository;
import com.example.docente.service.DocenteService;

@Service
public class DocenteServiceImpl implements DocenteService {
    @Autowired
    private DocenteRepository docenteRepository;

    @Override
    public List<Docente> listar() {
        return docenteRepository.findAll();
    }

    @Override
    public Docente guardar(Docente docente) {
        return docenteRepository.save(docente);
    }

    @Override
    public Docente actualizar(Docente docente) {
        return docenteRepository.save(docente);
    }

    @Override
    public Optional<Docente> listarPorId(Integer id) {
        return docenteRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        docenteRepository.deleteById(id);
    }
}
