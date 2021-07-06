package es.mtas.itss.comunicacioncorreo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;

public interface INotificacionCorreoElecRepository extends JpaRepository<NotificacionCorreoElectronico, Integer> {

}