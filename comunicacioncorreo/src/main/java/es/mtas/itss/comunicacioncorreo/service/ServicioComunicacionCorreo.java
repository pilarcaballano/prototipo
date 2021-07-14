package es.mtas.itss.comunicacioncorreo.service;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;

public interface ServicioComunicacionCorreo {
	
	NotificacionCorreoElectronico guardarNotificacion(NotificacionCorreoElectronico nuevaNotificacion);
	
	NotificacionCorreoElectronico aceptarNotificacionPendiente(NotificacionCorreoElectronico notifPdte);

}
