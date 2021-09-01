package com.formacion.mircorservicios.app.provincia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.formacion.mircorservicios.app.provincia.services.ProvinciasServices;

@RestController
public class ProvinciasController {

	@Autowired
	private ProvinciasServices provinciasService;
	
	@GetMapping("")
	private ResponseEntity<?> getProvincias() throws Exception {			
		return ResponseEntity.ok().body(provinciasService.findAllProvincias());
	}
	
}
