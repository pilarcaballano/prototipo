package com.formacion.microservicios.app.actas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.formacion.microservicios.app.actas.models.entity.Actas;
import com.formacion.microservicios.app.actas.models.repository.ActasRepository;

@Service
public class ActasServiceImpl implements ActasService {

	@Autowired
	ActasRepository actasRepository ;

	@Override
	@Transactional(readOnly = true)
	public List<Actas> getAllActasByStatus(Long idEstado) {
		return actasRepository.getAllActasByStatus(idEstado);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Actas> getAllActasByStatusPaginator(Long idEstado, Pageable paginator) {
		return actasRepository.getAllActasByStatusPaginator(idEstado, paginator);
	}

	@Override
	public Actas save(Actas actas) {
		return actasRepository.save(actas);
	}

	@Override
	@Transactional
	public void deleteById(String id) {
		actasRepository.deleteById(id);
	}
}