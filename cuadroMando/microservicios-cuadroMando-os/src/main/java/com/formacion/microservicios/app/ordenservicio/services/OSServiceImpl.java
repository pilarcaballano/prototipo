package com.formacion.microservicios.app.ordenservicio.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.formacion.microservicios.app.ordenservicio.models.entity.OrdenServicio;
import com.formacion.microservicios.app.ordenservicio.models.repository.OrdenServicioRepository;

@Service
public class OSServiceImpl implements OSService {

	@Autowired
	private OrdenServicioRepository ordenServicioRepository;

	@Override
	@Transactional(readOnly = true)
	public Page<OrdenServicio> getAllOS(Example<OrdenServicio> filters, Pageable paginator) {
		return ordenServicioRepository.findAll(filters, paginator);
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<OrdenServicio> getOSById(String id) {
		return ordenServicioRepository.findById(id);
	}

	@Override
	@Transactional
	public String obtenerCodOs() {
		return ordenServicioRepository.obtenerCodOs();
	}

	@Override
	@Transactional
	public OrdenServicio save(OrdenServicio ordenServicio) {
		return ordenServicioRepository.save(ordenServicio);
	}

	@Override
	@Transactional
	public void deleteById(String id) {
		ordenServicioRepository.deleteById(id);
	}

	@Override
	public Long countAllOS(Example<OrdenServicio> filters) {
		return ordenServicioRepository.count(filters);
	}
}