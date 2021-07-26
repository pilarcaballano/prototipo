package es.mtas.itss.comunicacioncorreo.controllers;

import java.io.IOException;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import es.mtas.itss.comunicacioncorreo.exception.ExcepcionGenerica;
import es.mtas.itss.comunicacioncorreo.model.Provincias;
import es.mtas.itss.comunicacioncorreo.service.ServicioProvincias;

@RestController
public class ProvinciasController {
	
	
	@Autowired
	ServicioProvincias servicioProvincias;
	
	@RequestMapping(value="/provincias", method=RequestMethod.GET)
	public @ResponseBody ResponseEntity<List<Provincias>> provincias() {

		List<Provincias> listado;
		
		try {
			listado = servicioProvincias.obtenerProvincias();
		} catch(Exception e) {
			throw new ExcepcionGenerica("No hay conexión con la base de datos");
		}
		
		return new ResponseEntity<>(listado, HttpStatus.OK);
		
	}
}
