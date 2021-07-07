package es.mtas.itss.comunicacioncorreo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;
import es.mtas.itss.comunicacioncorreo.repository.INotificacionCorreoElecRepository;
import es.mtas.itss.comunicacioncorreo.service.ServicioComunicacionCorreo;

@Service
@Transactional
public class ServicioComunicacionCorreoImpl implements ServicioComunicacionCorreo {

	@Autowired
	private INotificacionCorreoElecRepository repository;
	
	
	public NotificacionCorreoElectronico guardarNotificacion(NotificacionCorreoElectronico nuevaNotificacion) {
		
//		Integer codigoNotificacion = repository.existeRegistro(nuevaNotificacion.getCodigoOS(), 
//									nuevaNotificacion.getCodigoProvincia(), nuevaNotificacion.getFechaDiligencia(), 
//									nuevaNotificacion.getNifEmpresa());
		
		Integer actualizado = repository.actualizarCorreo(nuevaNotificacion.getCorreoElectronico(),
				nuevaNotificacion.getCodigoOS(), nuevaNotificacion.getCodigoProvincia(), 
				nuevaNotificacion.getFechaDiligencia(), nuevaNotificacion.getNifEmpresa());
											
		if(actualizado == 0) {
			repository.save(nuevaNotificacion);
		} 
		
		return nuevaNotificacion;
	}
}
