package com.formacion.mircorservicios.app.estados.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.formacion.mircorservicios.app.estados.models.repository.EstadosRepository;
import com.formacion.mircorservicios.commons.estados.models.entity.Estados;

@Service
public class EstadosServiceImpl implements EstadosService {

	@Autowired
	EstadosRepository estadosRepository;
	
	@Override
	public Iterable<Estados> findAllEstados() {
		return estadosRepository.findAll();
	}

}
