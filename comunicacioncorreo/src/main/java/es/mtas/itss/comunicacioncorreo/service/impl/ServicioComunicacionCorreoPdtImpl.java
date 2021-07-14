package es.mtas.itss.comunicacioncorreo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;
import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronicoPendiente;
import es.mtas.itss.comunicacioncorreo.repository.INotificacionCorreoElecPdtRepository;
import es.mtas.itss.comunicacioncorreo.service.ServicioComunicacionCorreoPdt;

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
