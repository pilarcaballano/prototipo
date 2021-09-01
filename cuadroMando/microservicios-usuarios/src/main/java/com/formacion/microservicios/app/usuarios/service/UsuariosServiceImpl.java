package com.formacion.microservicios.app.usuarios.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.formacion.microservicios.app.usuarios.models.repository.UsuariosRepository;
import com.formacion.mircorservicios.commons.usuarios.models.entity.Usuario;

@Service
public class UsuariosServiceImpl implements UsuariosService{

	@Autowired
	private UsuariosRepository usuariosRepository;

	@Override
	public Optional<Usuario> getUserByID(long id) {
		return usuariosRepository.findById(id);
	}

	@Override
	public Page<Usuario> findAll(Example<Usuario> usuario, Pageable  paginator) {
		return usuariosRepository.findAll(usuario, paginator);
	}
}