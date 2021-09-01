package com.formacion.microservicios.app.actas.models.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.formacion.microservicios.app.actas.models.entity.Actas;

public interface ActasRepository extends PagingAndSortingRepository<Actas, String> {

	@Query("select a from Actas a where a.estado.estadoID=?1")
	List<Actas> getAllActasByStatus(Long idEstado);
	
	@Query("select a from Actas a where a.estado.estadoID=:idEstado")
	List<Actas> getAllActasByStatusPaginator(Long idEstado, Pageable paginator);

	@Query("select max(a.id) from Actas a")
	String obtenerCodActas();
}