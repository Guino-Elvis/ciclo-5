package com.pruebatecnica.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.pruebatecnica.api.model.Rol;
import com.pruebatecnica.api.repository.RolRepository;

@RestController
@RequestMapping("/api/rol")
@CrossOrigin(origins = "http://localhost:4200")
public class RolController {

	@Autowired
	private RolRepository rolRepository;
	
	@GetMapping()
	public ResponseEntity<List<Rol>> listar() {
		try {
			return ResponseEntity.ok(rolRepository.findAll());
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}
}
