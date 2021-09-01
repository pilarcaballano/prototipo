package com.formacion.microservicios.app.usuarios.controller;

import java.util.Optional;

import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.formacion.microservicios.app.usuarios.service.UsuariosService;
import com.formacion.mircorservicios.commons.usuarios.models.entity.Usuario;

@RestController
public class UsuariosController {

	@Autowired
	private UsuariosService usuariosService;

	@GetMapping("")
	private ResponseEntity<?> getUserByID(@RequestParam(name = "id") Long id) {
		Optional<Usuario> user = usuariosService.getUserByID(id);

		if (!user.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(user);
	}

	@GetMapping("/list")
	private ResponseEntity<?> getUsers( @RequestParam(name = "nombre", required = false) String nombre,
										@RequestParam(name = "apellido1", required = false) String apellido1,
										@RequestParam(name = "apellido2", required = false) String apellido2,
										@RequestParam(name = "paginatorIndex", required = false) Integer page,
										@RequestParam(name = "paginatorSize", required = false) Integer size)
	{
		Pageable paginator = null;
		
		Usuario user = new Usuario();
		user.setNombre(nombre);
		user.setApellido1(apellido1);
		user.setApellido2(apellido2);
			
		// Si vienen informado el numero de pagina y el tamaño, lo asignamos al pageable.
		if (page != null && size != null) {
			paginator = PageRequest.of(page, size);
		}else {
			paginator = PageRequest.of(0, 10);
		}

		Example<Usuario> usuario = Example.of(user);

		return ResponseEntity.ok(usuariosService.findAll(usuario, paginator));
	}
}