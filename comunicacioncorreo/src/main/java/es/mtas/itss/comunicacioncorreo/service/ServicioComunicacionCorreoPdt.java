package es.mtas.itss.comunicacioncorreo.service;

import java.util.List;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;
import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronicoPendiente;

public interface ServicioComunicacionCorreoPdt {
	
	List<NotificacionCorreoElectronicoPendiente> obtenerPendientes();

	long numNotificacionesPendientes();

	NotificacionCorreoElectronico rechazarNotificacionPendiente(NotificacionCorreoElectronico notifPdte);
	
}
