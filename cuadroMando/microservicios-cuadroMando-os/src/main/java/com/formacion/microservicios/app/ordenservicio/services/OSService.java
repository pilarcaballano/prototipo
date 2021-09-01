package com.formacion.microservicios.app.ordenservicio.services;

import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.formacion.microservicios.app.ordenservicio.models.entity.OrdenServicio;

public interface OSService {
			
	public Page<OrdenServicio> getAllOS(Example<OrdenServicio> example, Pageable paginator);
	
	public Optional<OrdenServicio> getOSById(String id);
	
	public String obtenerCodOs();

	public OrdenServicio save(OrdenServicio ordenServicio);

	public void deleteById(String Id);

	public Long countAllOS(Example<OrdenServicio> filters);
}