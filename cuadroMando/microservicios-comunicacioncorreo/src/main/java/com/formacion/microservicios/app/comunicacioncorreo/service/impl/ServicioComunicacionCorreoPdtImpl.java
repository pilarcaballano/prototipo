package com.formacion.microservicios.app.comunicacioncorreo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.formacion.microservicios.app.comunicacioncorreo.model.NotificacionCorreoElectronico;
import com.formacion.microservicios.app.comunicacioncorreo.model.NotificacionCorreoElectronicoPendiente;
import com.formacion.microservicios.app.comunicacioncorreo.repository.INotificacionCorreoElecPdtRepository;
import com.formacion.microservicios.app.comunicacioncorreo.service.ServicioComunicacionCorreoPdt;

@Service
@Transactional
public class ServicioComunicacionCorreoPdtImpl implements ServicioComunicacionCorreoPdt {

	@Autowired
	private INotificacionCorreoElecPdtRepository repositoryPendientes;
	
	
	public List<NotificacionCorreoElectronicoPendiente> obtenerPendientes() {
		return repositoryPendientes.obtenerPendientes();
	}
	
	public long numNotificacionesPendientes() {
		return repositoryPendientes.count();
	}
	
	public NotificacionCorreoElectronico rechazarNotificacionPendiente(NotificacionCorreoElectronico notifPdte) {		
		repositoryPendientes.eliminarNotificacionPendiente(notifPdte.getCodigoNotificacion());
		return notifPdte;
	}
}
