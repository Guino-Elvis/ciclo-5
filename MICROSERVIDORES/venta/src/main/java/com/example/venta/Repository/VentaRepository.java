package com.example.venta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.venta.Entity.Venta;

public interface VentaRepository extends JpaRepository<Venta, Integer> {

}
