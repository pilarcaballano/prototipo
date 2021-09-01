package com.formacion.mircorservicios.app.provincia.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.formacion.mircorservicios.app.provincia.models.repository.ProvinciasRepository;
import com.formacion.mircorservicios.commons.provincias.models.entity.Provincias;

@Service
public class ProvinciasServicesImpl implements ProvinciasServices {

	@Autowired
	ProvinciasRepository provinciaRepository;
	
	@Override
	public Iterable<Provincias> findAllProvincias() {
		return provinciaRepository.findAll();
	}

}
