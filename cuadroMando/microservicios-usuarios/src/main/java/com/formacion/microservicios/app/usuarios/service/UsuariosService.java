package com.formacion.microservicios.app.usuarios.service;

import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.formacion.mircorservicios.commons.usuarios.models.entity.Usuario;

public interface UsuariosService {

	public Optional<Usuario> getUserByID(long id);

	public Page<Usuario> findAll(Example<Usuario> usuario, Pageable paginator);

}