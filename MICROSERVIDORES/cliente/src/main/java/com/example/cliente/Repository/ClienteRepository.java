package com.example.cliente.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cliente.Entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    //
}
