package es.mtas.itss.comunicacioncorreo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;
import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronicoPendiente;
import es.mtas.itss.comunicacioncorreo.repository.INotificacionCorreoElecPdtRepository;
import es.mtas.itss.comunicacioncorreo.repository.INotificacionCorreoElecRepository;
import es.mtas.itss.comunicacioncorreo.service.ServicioComunicacionCorreo;

@Service
@Transactional
public class ServicioComunicacionCorreoImpl implements ServicioComunicacionCorreo {

	@Autowired
	private INotificacionCorreoElecRepository repository;
	
	@Autowired
	private INotificacionCorreoElecPdtRepository repositoryPendientes;
	
	
	public NotificacionCorreoElectronico guardarNotificacion(NotificacionCorreoElectronico nuevaNotificacion) {
	
		Integer actualizado = repository.actualizarCorreo(nuevaNotificacion.getCorreoElectronico(),
				nuevaNotificacion.getCodigoOS(), nuevaNotificacion.getCodigoProvincia(), 
				nuevaNotificacion.getFechaDiligencia(), nuevaNotificacion.getNifEmpresa());
											
		if(actualizado == 0) {			
			repositoryPendientes.save(nuevaNotificacion.pasarAPendiente());
		}
		
		return nuevaNotificacion;
	}
	
	public NotificacionCorreoElectronico aceptarNotificacionPendiente(NotificacionCorreoElectronico notifPdte) {		
		repository.actualizarCorreoAceptada(notifPdte.getCorreoElectronico(),
				notifPdte.getCodigoOS(), notifPdte.getCodigoProvincia(), 
				notifPdte.getFechaDiligencia(), notifPdte.getNifEmpresa());
		repositoryPendientes.eliminarNotificacionPendiente(notifPdte.getCodigoNotificacion());
		return notifPdte;
		
	}
}
