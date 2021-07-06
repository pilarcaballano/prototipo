package es.mtas.itss.comunicacioncorreo.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.mtas.itss.comunicacioncorreo.model.Provincias;
import es.mtas.itss.comunicacioncorreo.repository.IProvinciasRepository;
import es.mtas.itss.comunicacioncorreo.service.ServicioProvincias;

@Service
@Transactional
public class ServicioProvinciasImpl implements ServicioProvincias {
	
	@Autowired
	private IProvinciasRepository provinciasRepository;

	public List<Provincias> obtenerProvincias(){
		List<Provincias> provincias = new ArrayList<Provincias>();

		provincias = provinciasRepository.findAll();

		return provincias;
	}
}
