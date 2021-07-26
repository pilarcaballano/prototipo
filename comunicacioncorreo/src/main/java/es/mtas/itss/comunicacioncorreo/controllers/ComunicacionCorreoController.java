package es.mtas.itss.comunicacioncorreo.controllers;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import es.mtas.itss.comunicacioncorreo.exception.ExcepcionGenerica;
import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;
import es.mtas.itss.comunicacioncorreo.service.ServicioComunicacionCorreo;


@RestController
public class ComunicacionCorreoController {
	
	@Autowired
	ServicioComunicacionCorreo servicioComCorreo;
	
	
	@RequestMapping(value="/comunicacioncorreo", method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody NotificacionCorreoElectronico crearNotificacionCE(@RequestBody NotificacionCorreoElectronico nuevaNotificacion) throws InterruptedException, ExecutionException, IOException {
		NotificacionCorreoElectronico notGuardada;
		
		try {
			notGuardada = servicioComCorreo.guardarNotificacion(nuevaNotificacion);
		} catch(Exception e) {
			throw new ExcepcionGenerica("Error al guardar la solicitud, reinténtelo en unos minutos");
		}
		
		return notGuardada;
	}
	
	@RequestMapping(value="/aceptarNotificacion", method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Integer> aceptarNotificacion(@RequestBody List<NotificacionCorreoElectronico> notificacionPendiente) {
		
		Integer actualizado = 0;
		
		for (Iterator<NotificacionCorreoElectronico> iterator = notificacionPendiente.iterator(); iterator.hasNext();) {
			actualizado = servicioComCorreo.aceptarNotificacionPendiente(( iterator.next()));
		} 
		
		return new ResponseEntity<>(actualizado, HttpStatus.OK);
	}
	
	@GetMapping("/checkNif")
	public Boolean checkNif(@RequestParam("nifEmpresa") String valor) {
		Boolean cifErroneo = Boolean.FALSE;
//		cifErroneo = servicioComCorreo.esCIFErroneo(valor);
//		if(!cifErroneo) {
			cifErroneo = servicioComCorreo.esNifNieErroneo(valor);
//		} 
		return cifErroneo;
//		return false;
	}
}
