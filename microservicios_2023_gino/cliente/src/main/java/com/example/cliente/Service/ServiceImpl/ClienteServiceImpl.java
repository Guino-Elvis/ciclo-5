package com.example.cliente.Service.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cliente.Entity.Cliente;
import com.example.cliente.Repository.ClienteRepository;
import com.example.cliente.Service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public List<Cliente> listar() {
        // TODO Auto-generated method stub
        return clienteRepository.findAll();
    }

    @Override
    public Cliente guardar(Cliente cliente) {
        // TODO Auto-generated method stub
        return clienteRepository.save(cliente);
    }

    @Override

    public Cliente actualizar(Cliente cliente) {
        // TODO Auto-generated method stub
        return clienteRepository.save(cliente);
    }

    @Override
    public Optional<Cliente> listarPorId(Integer id) {
        // TODO Auto-generated method stub
        return clienteRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        // TODO Auto-generated method stub
        clienteRepository.deleteById(id);

    }

}
