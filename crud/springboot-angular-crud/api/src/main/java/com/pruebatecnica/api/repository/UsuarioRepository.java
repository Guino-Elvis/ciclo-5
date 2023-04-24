package com.pruebatecnica.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.pruebatecnica.api.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

	@Query(value = "SELECT * FROM usuario WHERE nombre LIKE CONCAT('%',LOWER( ?1 ), '%') ORDER BY LOCATE( ?1 , nombre) ASC, nombre ASC", nativeQuery = true)
	public List<Usuario> findLikeNombre(String nombre);
	
	public List<Usuario> findByNombre(String nombre);
	
	public List<Usuario> findAllByOrderByIdAsc();
}
