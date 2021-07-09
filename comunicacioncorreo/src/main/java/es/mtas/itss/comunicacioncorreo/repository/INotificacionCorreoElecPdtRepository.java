package es.mtas.itss.comunicacioncorreo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronicoPendiente;


public interface INotificacionCorreoElecPdtRepository extends JpaRepository<NotificacionCorreoElectronicoPendiente, Integer> {

}