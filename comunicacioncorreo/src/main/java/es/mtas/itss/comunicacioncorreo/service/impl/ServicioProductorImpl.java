package es.mtas.itss.comunicacioncorreo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import es.mtas.itss.comunicacioncorreo.service.ServicioProductor;

@Service
public class ServicioProductorImpl implements ServicioProductor {
	public static final String topic = "miTopic";
	
	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;
	
	public void publicarEnTopic(String mensaje) {
		System.out.println("Publicar en el grupo: "+ topic);
		this.kafkaTemplate.send(topic, mensaje);
		
	}

}
