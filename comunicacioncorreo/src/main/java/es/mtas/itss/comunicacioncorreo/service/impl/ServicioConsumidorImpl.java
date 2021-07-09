package es.mtas.itss.comunicacioncorreo.service.impl;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import es.mtas.itss.comunicacioncorreo.service.ServicioConsumidor;

@Service
public class ServicioConsumidorImpl implements ServicioConsumidor {
	
	@KafkaListener(topics="miTopic", groupId="miGrupo")
	public void comsumirEnTopic(String mensaje) {
		System.out.println("Se ha consumido el mensaje: "+ mensaje);
		
	}

}

