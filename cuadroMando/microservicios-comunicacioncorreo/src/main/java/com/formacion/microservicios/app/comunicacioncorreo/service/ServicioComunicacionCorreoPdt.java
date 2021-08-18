package com.formacion.microservicios.app.comunicacioncorreo.service;

import java.util.List;

import com.formacion.microservicios.app.comunicacioncorreo.model.NotificacionCorreoElectronico;
import com.formacion.microservicios.app.comunicacioncorreo.model.NotificacionCorreoElectronicoPendiente;

public interface ServicioComunicacionCorreoPdt {
	
	List<NotificacionCorreoElectronicoPendiente> obtenerPendientes();

	long numNotificacionesPendientes();

	NotificacionCorreoElectronico rechazarNotificacionPendiente(NotificacionCorreoElectronico notifPdte);
	
}
