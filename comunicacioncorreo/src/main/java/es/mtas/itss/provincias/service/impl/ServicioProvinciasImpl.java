package es.mtas.itss.provincias.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.mtas.itss.provincias.model.Provincias;
import es.mtas.itss.provincias.repository.IProvinciasRepository;
import es.mtas.itss.provincias.service.ServicioProvincias;

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
