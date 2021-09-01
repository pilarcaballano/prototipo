package com.formacion.mircorservicios.app.estados.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.formacion.mircorservicios.app.estados.services.EstadosService;

@RestController
public class EstadosController {

	@Autowired
	private EstadosService estadosService;

	@GetMapping
	public ResponseEntity<?> listarEstados() {
		return ResponseEntity.ok().body(estadosService.findAllEstados());
	}
	
}
