package com.example.venta.service.impl;

import com.example.venta.entity.Venta;
import com.example.venta.repository.VentaRepository;
import com.example.venta.service.VentaService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VentaServiceImpl implements VentaService {
    @Autowired
    private VentaRepository ventaRepository;

    @Override
    public List<Venta> list() {
        return ventaRepository.findAll();
    }

    @Override
    public Venta save(Venta venta) {
        return ventaRepository.save(venta);
    }

    @Override
    public Venta update(Venta venta) {
        return ventaRepository.save(venta);
    }

    @Override
    public Optional<Venta> listById(Integer id) {
        return ventaRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        ventaRepository.deleteById(id);
    }
}
