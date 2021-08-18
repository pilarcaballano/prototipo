package com.formacion.microservicios.app.comunicacioncorreo.service;

import com.formacion.microservicios.app.comunicacioncorreo.model.NotificacionCorreoElectronico;

public interface ServicioComunicacionCorreo {
	
	NotificacionCorreoElectronico guardarNotificacion(NotificacionCorreoElectronico nuevaNotificacion) throws Exception;
	
	Integer aceptarNotificacionPendiente(NotificacionCorreoElectronico notifPdte);

	Boolean esNifNieErroneo(String valor);
}
