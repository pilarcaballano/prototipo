package com.formacion.microservicios.app.actas.services;

import java.util.List;
import org.springframework.data.domain.Pageable;
import com.formacion.microservicios.app.actas.models.entity.Actas;

public interface ActasService {

	public List<Actas> getAllActasByStatus(Long idEstado);
	
	public List<Actas> getAllActasByStatusPaginator(Long idEstado, Pageable paginator);

	public Actas save(Actas ordenServicio);

	public void deleteById(String Id);
}