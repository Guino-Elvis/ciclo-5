package com.pruebatecnica.api.mapper;

import com.pruebatecnica.api.dto.UsuarioDTO;
import com.pruebatecnica.api.model.Rol;
import com.pruebatecnica.api.model.Usuario;

public abstract class UsuarioMapper {

	public static Usuario usuarioDTOToUsuario(UsuarioDTO usuarioDTO) {
		Usuario usuario = new Usuario();
		usuario.setId(usuarioDTO.getId());
		usuario.setNombre(usuarioDTO.getNombre());
		Rol rol = new Rol();
		rol.setId(usuarioDTO.getId_rol());
		usuario.setRol(rol);
		usuario.setActivo(usuarioDTO.getActivo());
		
		return usuario;
	}
}
