package es.mtas.itss.provincias.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import es.mtas.itss.provincias.model.Provincias;

public interface IProvinciasRepository extends JpaRepository<Provincias, Integer> {

}