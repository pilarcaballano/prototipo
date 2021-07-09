package es.mtas.itss.comunicacioncorreo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.mtas.itss.comunicacioncorreo.service.ServicioProductor;

@RestController
@RequestMapping("/kafkaApp")
public class KafkaController {
	
	@Autowired
	ServicioProductor servicioProductor;
	
	@PostMapping(value="post")
	public void enviarMensaje(@RequestParam("mensaje") String mensaje) {
		servicioProductor.publicarEnTopic(mensaje);
	}
}
