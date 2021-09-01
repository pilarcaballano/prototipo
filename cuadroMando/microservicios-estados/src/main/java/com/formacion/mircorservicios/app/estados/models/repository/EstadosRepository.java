package com.formacion.mircorservicios.app.estados.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.formacion.mircorservicios.commons.estados.models.entity.Estados;

public interface EstadosRepository extends JpaRepository<Estados, Long> {

}
