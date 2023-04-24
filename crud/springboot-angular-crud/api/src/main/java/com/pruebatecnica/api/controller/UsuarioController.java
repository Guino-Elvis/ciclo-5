package com.pruebatecnica.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pruebatecnica.api.dto.UsuarioDTO;
import com.pruebatecnica.api.mapper.UsuarioMapper;
import com.pruebatecnica.api.model.Usuario;
import com.pruebatecnica.api.repository.UsuarioRepository;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	
	@GetMapping
	public ResponseEntity<List<Usuario>> listar() {
		try {
			return ResponseEntity.ok(usuarioRepository.findAllByOrderByIdAsc());
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}
	
	@GetMapping("/buscar/{nombre}")
	public ResponseEntity<List<Usuario>> buscarPorNombre(@PathVariable("nombre") String nombre) {
		try {
			return ResponseEntity.ok(usuarioRepository.findLikeNombre(nombre));
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}
	
	@PostMapping
	public ResponseEntity<Usuario> guardar(@RequestBody UsuarioDTO usuario) {		
		try {
			if(usuarioRepository.findByNombre(usuario.getNombre()).size() > 0) {
				return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).build();
			}
			else {
				usuarioRepository.save(UsuarioMapper.usuarioDTOToUsuario(usuario));
				return ResponseEntity.ok().build();
			}
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}
	
	@PutMapping
	public ResponseEntity<Usuario> actualizar(@RequestBody UsuarioDTO usuario) {
		try {
			if(usuarioRepository.existsById(usuario.getId()) ) {
				usuarioRepository.save(UsuarioMapper.usuarioDTOToUsuario(usuario));
				return ResponseEntity.ok().build();
			}
			else {
				return ResponseEntity.notFound().build();
			}
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Usuario> borrar(@PathVariable("id") int id) {
		try {
			usuarioRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}
}
