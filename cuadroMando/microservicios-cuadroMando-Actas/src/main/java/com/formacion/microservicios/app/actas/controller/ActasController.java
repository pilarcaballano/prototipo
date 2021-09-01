package com.formacion.microservicios.app.actas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.formacion.microservicios.app.actas.models.entity.Actas;
import com.formacion.microservicios.app.actas.services.ActasService;

@RestController
public class ActasController {

	@Autowired
	private ActasService actasServicio;

	@GetMapping("/lista")
	private ResponseEntity<?> getAllActasByStatus(@RequestParam(name="idEstado") Long idEstado,
															@RequestParam(name="paginatorIndex", required = false) Integer page,
															@RequestParam(name="paginatorSize", required = false) Integer size)
	{
		Pageable paginator = null;
		List<Actas> listaActas = null;

		try {
			 listaActas = actasServicio.getAllActasByStatus(idEstado);

			if(listaActas.size() < 1) {
				 return ResponseEntity.notFound().build();
			}
			//Si vienen informado el numero de pagina y el tamaño, lo asignamos al pageable.
			if(page != null && size != null) {
				paginator = PageRequest.of(page, size);
			}
			return ResponseEntity.ok(actasServicio.getAllActasByStatusPaginator(idEstado, paginator));

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Datos incorrectos");
		}
	}

	@GetMapping("/count")
	private ResponseEntity<?> getCountActasByStatus(@RequestParam(name="idEstado") Long idEstado)
	{
		int contadorActas = 0;
		List<Actas> listaActas = null;
		
		try {
			listaActas = actasServicio.getAllActasByStatus(idEstado);
			contadorActas = listaActas.size();
			
			if(contadorActas < 1) {
				return ResponseEntity.notFound().build();
			}
			return ResponseEntity.ok().body(contadorActas);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Datos incorrectos");
		}
	}

	@DeleteMapping
	public ResponseEntity<?> eliminar(@RequestParam(name="id", required=false) String id) {
		actasServicio.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}