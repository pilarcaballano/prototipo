package com.formacion.microservicios.app.ordenservicio.controller;

import java.util.Date;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.formacion.microservicios.app.ordenservicio.models.entity.OrdenServicio;
import com.formacion.microservicios.app.ordenservicio.services.OSService;
import com.formacion.mircorservicios.commons.estados.models.entity.Estados;
import com.formacion.mircorservicios.commons.provincias.models.entity.Provincias;
import com.formacion.mircorservicios.commons.usuarios.models.entity.Usuario;

@RestController
public class OrdenServicioController {

	@Autowired
	private OSService osServicio;

	@GetMapping("/lista")
	private ResponseEntity<?> getAllOS( 
			@RequestParam(name="id", required = false) String id,	
			@RequestParam(name="idEstado", required = false) Long idEstado,
			@RequestParam(name="idProvincia", required = false) Long idProvincia,
			@RequestParam(name="idActuante", required = false) Long idActuante,
			@RequestParam(name="idUsuarioCreacion", required = false) Long idUsuarioCreacion,
			@RequestParam(name="fechaDesde", required = false) Date fechaDesde,
			@RequestParam(name="fechaHasta", required = false) Integer fechaHasta,
			@RequestParam(name ="pageIndex", required = false) Integer page,
			@RequestParam(name ="pageSize", required = false) Integer size)
	{
		Pageable paginator = null;
		Page<OrdenServicio> listaOS = null;

		//Generamos el Ejemplo
		OrdenServicio os = new OrdenServicio();
		Usuario a = new Usuario();
		Usuario u = new Usuario();
		Provincias p = new Provincias();
		Estados e = new Estados();
		
		a.setId(idActuante);
		u.setId(idUsuarioCreacion);
		p.setId(idProvincia);
		e.setEstadoID(idEstado);
		os.setId(id);
		os.setActuante(a);
		os.setUsuarioCreacion(u);
		os.setProvincia(p);
		os.setEstado(e);
		
		ExampleMatcher matcher = ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING);
		Example<OrdenServicio> filters = Example.of(os, matcher);
		
		//Si vienen informado el numero de pagina y el tamaño, lo asignamos al pageable.
		if(page != null && size != null) {
			paginator = PageRequest.of(page, size);
		}else {
			paginator = PageRequest.of(0, 10);
		}

		try {
			
			listaOS = osServicio.getAllOS(filters, paginator);

			if(listaOS.getSize() < 1) {
				return ResponseEntity.notFound().build();
			}
			
			return ResponseEntity.ok(listaOS);

		} catch (Exception ex) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Datos incorrectos");
		}
	}

	@GetMapping("/count")
	private ResponseEntity<?> getCountOS(@RequestParam(name="idEstado", required = false) Long idEstado,
			@RequestParam(name="idProvincia", required = false) Long idProvincia,
			@RequestParam(name="idActuante", required = false) Long idActuante,
			@RequestParam(name="idUsuarioCreacion", required = false) Long idUsuarioCreacion,
			@RequestParam(name="fechaDesde", required = false) Date fechaDesde,
			@RequestParam(name="fechaHasta", required = false) Integer fechaHasta)
	{		
		OrdenServicio os = new OrdenServicio();
		Usuario a = new Usuario();
		Usuario u = new Usuario();
		Provincias p = new Provincias();
		Estados e = new Estados();
		
		//Generamos el Ejemplo
		a.setId(idActuante);
		u.setId(idUsuarioCreacion);
		p.setId(idProvincia);
		e.setEstadoID(idEstado);
		os.setActuante(a);
		os.setUsuarioCreacion(u);
		os.setProvincia(p);
		os.setEstado(e);
		
		ExampleMatcher matcher = ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING);
		Example<OrdenServicio> filters = Example.of(os, matcher);
		
		//Pageable paginator = PageRequest.of(0, 10000000);

		try {
			return ResponseEntity.ok().body(osServicio.countAllOS(filters));

		} catch (Exception ex) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Datos incorrectos");
		}
	}

	@GetMapping("/detalle")
	private ResponseEntity<?> getOSById(@RequestParam(name="id", required=false) String id)
	{
		Optional<OrdenServicio> os = osServicio.getOSById(id);

		if(!os.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(os.get());
	}

	@PutMapping("/detalle")
	private ResponseEntity<?> actualizarOS(@RequestBody OrdenServicio ordenServicio)
	{
		OrdenServicio dbOrdenServicio = new OrdenServicio();

		try {
			Optional<OrdenServicio> os = osServicio.getOSById(ordenServicio.getId());
	
			if(!os.isPresent()) {
				return ResponseEntity.notFound().build();
			}
	
			dbOrdenServicio.setId(ordenServicio.getId());
			if(ordenServicio.getActuante() != null) {
				dbOrdenServicio.setActuante(new Usuario());
				dbOrdenServicio.getActuante().setId(ordenServicio.getActuante().getId());
			}	
			if(ordenServicio.getEstado() != null) {
				dbOrdenServicio.setEstado(new Estados());
				dbOrdenServicio.getEstado().setEstadoID(ordenServicio.getEstado().getEstadoID());
			}
			if(ordenServicio.getUsuarioCreacion() != null) {
				dbOrdenServicio.setUsuarioCreacion(new Usuario());
				dbOrdenServicio.getUsuarioCreacion().setId(ordenServicio.getUsuarioCreacion().getId());
			}
			if(ordenServicio.getProvincia() != null) {
				dbOrdenServicio.setProvincia(new Provincias());
				dbOrdenServicio.getProvincia().setId(ordenServicio.getProvincia().getId());
			}
	
			return ResponseEntity.status(HttpStatus.CREATED).body(osServicio.save(dbOrdenServicio));

		} catch (Exception e) {
			dbOrdenServicio=null;
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Datos incorrectos");
		}
	}

	@PostMapping("/detalle")
	private ResponseEntity<?> guardarNuevaOS(@RequestBody OrdenServicio ordenServicio)
	{
		String codOS = "";
		String[] newCodOs;
		String format = "";

		try {
			codOS = osServicio.obtenerCodOs();
			newCodOs = codOS.split("/");
			format = String.format(String.valueOf(ordenServicio.getProvincia().getId()).concat("/%07d/21"),Integer.valueOf(newCodOs[1])+1);
			ordenServicio.setId(format);

			return ResponseEntity.ok().body(osServicio.save(ordenServicio));

		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Datos incorrectos");
		}
	}

	@DeleteMapping("/delete")
	public ResponseEntity<?> eliminar(@RequestParam(name="id", required=false) String id)
	{
		osServicio.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}