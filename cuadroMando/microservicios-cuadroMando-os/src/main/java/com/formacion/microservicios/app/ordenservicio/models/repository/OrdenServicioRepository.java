package com.formacion.microservicios.app.ordenservicio.models.repository;

import java.util.List;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.formacion.microservicios.app.ordenservicio.models.entity.OrdenServicio;

public interface OrdenServicioRepository extends PagingAndSortingRepository<OrdenServicio, String> {

	@Query("select o from OrdenServicio o where o.estado.estadoID=?1")
	List<OrdenServicio> getAllOSByStatus(Long idEstado);
	
	@Query("select o from OrdenServicio o where o.estado.estadoID=:idEstado")
	List<OrdenServicio> getAllOSByStatusPaginator(Long idEstado, Pageable paginator);

	@Query("select max(o.id) from OrdenServicio o")
	String obtenerCodOs();
	
	Page<OrdenServicio> findAll(Example<OrdenServicio> filters, Pageable paginator);

	//@Query("select count(o.id) from OrdenServicio o")
	Long count(Example<OrdenServicio> filters);
}