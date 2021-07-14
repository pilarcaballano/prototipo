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
import es.mtas.itss.comunicacioncorreo.service.ServicioComunicacionCorreo;


@RestController
public class ComunicacionCorreoController {
	
	@Autowired
	ServicioComunicacionCorreo servicioComCorreo;
	
	
	@RequestMapping(value="/comunicacioncorreo", method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody NotificacionCorreoElectronico crearNotificacionCE(@RequestBody NotificacionCorreoElectronico nuevaNotificacion) throws InterruptedException, ExecutionException, IOException {
			
		return servicioComCorreo.guardarNotificacion(nuevaNotificacion);
	}
	
	@RequestMapping(value="/aceptarNotificacion", method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody NotificacionCorreoElectronico aceptarNotificacion(@RequestBody List<NotificacionCorreoElectronico> notificacionPendiente) {
		
		for (Iterator<NotificacionCorreoElectronico> iterator = notificacionPendiente.iterator(); iterator.hasNext();) {
			servicioComCorreo.aceptarNotificacionPendiente((NotificacionCorreoElectronico) iterator.next());
			
		} 
		
		return notificacionPendiente.get(notificacionPendiente.size()-1);
	}
}
