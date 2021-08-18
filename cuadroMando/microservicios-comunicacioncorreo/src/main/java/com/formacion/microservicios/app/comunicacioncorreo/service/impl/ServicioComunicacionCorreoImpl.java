package com.formacion.microservicios.app.comunicacioncorreo.service.impl;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.formacion.microservicios.app.comunicacioncorreo.model.NotificacionCorreoElectronico;
import com.formacion.microservicios.app.comunicacioncorreo.repository.INotificacionCorreoElecPdtRepository;
import com.formacion.microservicios.app.comunicacioncorreo.repository.INotificacionCorreoElecRepository;
import com.formacion.microservicios.app.comunicacioncorreo.service.ServicioComunicacionCorreo;

@Service
@Transactional
public class ServicioComunicacionCorreoImpl implements ServicioComunicacionCorreo {

	@Autowired
	private INotificacionCorreoElecRepository repository;
	
	@Autowired
	private INotificacionCorreoElecPdtRepository repositoryPendientes;
	
	
	public NotificacionCorreoElectronico guardarNotificacion(NotificacionCorreoElectronico nuevaNotificacion) throws Exception {
	
		Integer actualizado = repository.actualizarCorreo(nuevaNotificacion.getCorreoElectronico(),
				nuevaNotificacion.getCodigoOS(), nuevaNotificacion.getProvincia().getId(), 
				nuevaNotificacion.getFechaDiligencia(), nuevaNotificacion.getNifEmpresa());
											
		if(actualizado == 0) {			
			repositoryPendientes.save(nuevaNotificacion.pasarAPendiente());
//		} else {
//			throw new Exception();
		}
		
		
		return nuevaNotificacion;
	}
	
	public Integer aceptarNotificacionPendiente(NotificacionCorreoElectronico notifPdte) {		
		Integer actualizado = repository.actualizarCorreoAceptada(notifPdte.getCorreoElectronico(),
				notifPdte.getCodigoOS(), notifPdte.getProvincia().getId(), 
				notifPdte.getFechaDiligencia(), notifPdte.getNifEmpresa());
		
		if(actualizado != 0) {
			repositoryPendientes.eliminarNotificacionPendiente(notifPdte.getCodigoNotificacion());
		}
		
		return actualizado;
		
	}
	
	//Validacion
	public Boolean esNifNieErroneo(String valor){
		
		Boolean esErroneo = Boolean.FALSE;
		
		// si es NIE, eliminar la x,y,z inicial para tratarlo como nif
		if (valor.toUpperCase().startsWith("X") || valor.toUpperCase().startsWith("Y") 
				|| valor.toUpperCase().startsWith("Z")) {
			valor = valor.substring(1);
		}

		Pattern valorPattern = Pattern.compile("(\\d{1,8})([TRWAGMYFPDXBNJZSQVHLCKEtrwagmyfpdxbnjzsqvhlcke])");
		Matcher m = valorPattern.matcher(valor);
		if (m.matches()) {
			String letra = m.group(2);
			// Extraer letra del valor
			String letras = "TRWAGMYFPDXBNJZSQVHLCKE";
			int dni = Integer.parseInt(m.group(1));
			dni = dni % 23;
			String reference = letras.substring(dni, dni + 1);

			if (reference.equalsIgnoreCase(letra)) {
				esErroneo = Boolean.FALSE;
			} else {
				esErroneo = Boolean.TRUE;
			}
		} else {
			esErroneo = Boolean.TRUE;
		}
		
		return esErroneo;
	}
	
//	private static boolean validarCIF(String cif) {
//
//		if (cif != null) {
//			final String cifUP = cif.toUpperCase();
//
//			if ("ABCDEFGHJKLMNPQRSUVW".indexOf(cifUP.charAt(0)) == -1) {
//				return false;
//			}
//
//			final Pattern mask = Pattern.compile("[ABCDEFGHJKLMNPQRSUVW][0-9]{7}[A-Z[0-9]]{1}");
//			final Matcher matcher = mask.matcher(cifUP);
//
//			if (!matcher.matches()) {
//				return false;
//			}
//
//			final char primerCar = cifUP.charAt(0);
//			final char ultimoCar = cifUP.charAt(cifUP.length() - 1);
//
//			TipoUltCaracter tipUltCar;
//
//			if (primerCar == 'P' || primerCar == 'Q' || primerCar == 'S' || primerCar == 'K' || primerCar == 'W') {
//				tipUltCar = TipoUltCaracter.LETRA;
//				if (!(ultimoCar >= 'A' && ultimoCar <= 'Z')) {
//					return false;
//				}
//
//			} else if (primerCar == 'A' || primerCar == 'B' || primerCar == 'E' || primerCar == 'H') {
//				tipUltCar = TipoUltCaracter.NUMERO;
//				if (!(ultimoCar >= '0' && ultimoCar <= '9')) {
//					return false;
//				}
//
//			} else {
//				tipUltCar = TipoUltCaracter.AMBOS;
//			}
//
//			final String digitos = cifUP.substring(1, cifUP.length() - 1);
//
//			Integer sumaPares = 0;
//			for (int i = 1; i <= digitos.length() - 1; i = i + 2) {
//				sumaPares += Integer.parseInt(digitos.substring(i, i + 1));
//			}
//
//			Integer sumaImpares = 0;
//			for (int i = 0; i <= digitos.length() - 1; i = i + 2) {
//				Integer cal = Integer.parseInt(digitos.substring(i, i + 1)) * 2;
//				if (cal.toString().length() > 1) {
//					cal = Integer.parseInt(cal.toString().substring(0, 1))
//							+ Integer.parseInt(cal.toString().substring(1, 2));
//				}
//				sumaImpares += cal;
//			}
//
//			final Integer total = sumaPares + sumaImpares;
//
//			Integer numControl = 10 - (total % 10);
//
//			/*
//			 * if (numControl == 10){ numControl = 0; }
//			 */
//			int pos = numControl == 10 ? 0 : numControl;
//
//			final char carControl = "JABCDEFGHI".charAt(pos);
//
//			if (tipUltCar == TipoUltCaracter.NUMERO) {
//
//				final Integer ultCar = Integer.parseInt(Character.toString(ultimoCar));
//				if (pos != ultCar.intValue()) {
//
//					return false;
//				}
//
//			} else if (tipUltCar == TipoUltCaracter.LETRA) {
//				if (carControl != ultimoCar) {
//					return false;
//				}
//
//			} else {
//				// find all occurrences forward
//				Integer ultCar = -1;
//
//				ultCar = "JABCDEFGHI".indexOf(ultimoCar);
//
//				if (ultCar < 0) {
//					ultCar = Integer.parseInt(Character.toString(ultimoCar));
//					if (pos != ultCar.intValue()) {
//						return false;
//					}
//				}
//				if ((pos != ultCar.intValue()) && (carControl != ultimoCar)) {
//					return false;
//				}
//			}
//			return true;
//		}
//		return false;
//	}
}
