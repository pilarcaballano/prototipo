package es.mtas.itss.comunicacioncorreo.controllers;

import java.io.IOException;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import es.mtas.itss.comunicacioncorreo.model.Provincias;
import es.mtas.itss.comunicacioncorreo.service.ServicioProvincias;

@RestController
public class ProvinciasController {
	
	
	@Autowired
	ServicioProvincias servicioProvincias;
	
	@RequestMapping(value="/provincias", method=RequestMethod.GET)
	public @ResponseBody List<Provincias> provincias() throws InterruptedException, ExecutionException, IOException {

		return servicioProvincias.obtenerProvincias();
		
	}
}
