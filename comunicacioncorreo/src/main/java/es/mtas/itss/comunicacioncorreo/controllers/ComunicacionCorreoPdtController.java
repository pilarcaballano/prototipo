package es.mtas.itss.comunicacioncorreo.controllers;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;
import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronicoPendiente;
import es.mtas.itss.comunicacioncorreo.service.ServicioComunicacionCorreo;
import es.mtas.itss.comunicacioncorreo.service.ServicioComunicacionCorreoPdt;

@RestController
public class ComunicacionCorreoPdtController {
	
	
	@Autowired
	ServicioComunicacionCorreoPdt servicioPendientes;
	
	@Autowired
	ServicioComunicacionCorreo servicioComCorreo;
	
	@RequestMapping(value="/solicitudes-pendientes", method=RequestMethod.GET)
	public @ResponseBody List<NotificacionCorreoElectronicoPendiente> obtenerPendientes() throws InterruptedException, ExecutionException, IOException {

		return servicioPendientes.obtenerPendientes();
		
	}
	
	@RequestMapping(value="/num-solicitudes-pendientes", method=RequestMethod.GET)
	public @ResponseBody long numNotificacionesPendientes() throws InterruptedException, ExecutionException, IOException {

		return servicioPendientes.numNotificacionesPendientes();
		
	}
	
	@RequestMapping(value="/rechazarNotificacion", method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody NotificacionCorreoElectronico rechazarNotificacion(@RequestBody List<NotificacionCorreoElectronico> notificacionPendiente) {
		
		for (Iterator<NotificacionCorreoElectronico> iterator = notificacionPendiente.iterator(); iterator.hasNext();) {
			servicioPendientes.rechazarNotificacionPendiente((NotificacionCorreoElectronico) iterator.next());
			
		} 
		
		return notificacionPendiente.get(notificacionPendiente.size()-1);
	}
}
