package com.formacion.microservicios.app.usuarios.models.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.formacion.mircorservicios.commons.usuarios.models.entity.Usuario;

public interface UsuariosRepository extends JpaRepository<Usuario, Long> {

	Page<Usuario> findByNombre(String nombre, Pageable paginator);
	
	Page<Usuario> findByApellido1(String apellido1, Pageable paginator);
	
	Page<Usuario> findByApellido2(String apellido2, Pageable paginator);

}