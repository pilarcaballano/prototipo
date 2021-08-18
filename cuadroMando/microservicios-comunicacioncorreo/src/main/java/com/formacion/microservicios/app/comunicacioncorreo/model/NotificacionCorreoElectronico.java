package com.formacion.microservicios.app.comunicacioncorreo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.formacion.mircorservicios.commons.provincias.models.entity.Provincias;

@Entity
@Table(name = "lince_notificacion_correo_electronico")
public class NotificacionCorreoElectronico {

	@Id
	@Column(name = "n_cod_notificacion")
	private Integer codigoNotificacion;
	@Column(name = "c_cod_os")
	private String codigoOS;
	@Column(name = "d_fecha_diligencia")
	private Date fechaDiligencia;
	@Column(name = "c_cod_nif_empresa")
	private String nifEmpresa;
	@Column(name = "des_correo_electronico")
	private String correoElectronico;
	
	@ManyToOne
    @JoinColumn(name = "n_cod_provincia")
	private Provincias provincia;

	/**
	 * @return the codigoNotificacion
	 */
	public Integer getCodigoNotificacion() {
		return codigoNotificacion;
	}

	/**
	 * @param codigoNotificacion the codigoNotificacion to set
	 */
	public void setCodigoNotificacion(Integer codigoNotificacion) {
		this.codigoNotificacion = codigoNotificacion;
	}

	/**
	 * @return the codigoOS
	 */
	public String getCodigoOS() {
		return codigoOS;
	}

	/**
	 * @param codigoOS the codigoOS to set
	 */
	public void setCodigoOS(String codigoOS) {
		this.codigoOS = codigoOS;
	}

	/**
	 * @return the fechaDiligencia
	 */
	public Date getFechaDiligencia() {
		return fechaDiligencia;
	}

	/**
	 * @param fechaDiligencia the fechaDiligencia to set
	 */
	public void setFechaDiligencia(Date fechaDiligencia) {
		this.fechaDiligencia = fechaDiligencia;
	}

	/**
	 * @return the nifEmpresa
	 */
	public String getNifEmpresa() {
		return nifEmpresa;
	}

	/**
	 * @param nifEmpresa the nifEmpresa to set
	 */
	public void setNifEmpresa(String nifEmpresa) {
		this.nifEmpresa = nifEmpresa;
	}

	/**
	 * @return the correoElectronico
	 */
	public String getCorreoElectronico() {
		return correoElectronico;
	}

	/**
	 * @param correoElectronico the correoElectronico to set
	 */
	public void setCorreoElectronico(String correoElectronico) {
		this.correoElectronico = correoElectronico;
	}

	public NotificacionCorreoElectronico(Integer codigoNotificacion, Provincias provincia, String codigoOS,
			Date fechaDiligencia, String nifEmpresa, String correoElectronico) {
		super();
		this.codigoNotificacion = codigoNotificacion;
		this.provincia = provincia;
		this.codigoOS = codigoOS;
		this.fechaDiligencia = fechaDiligencia;
		this.nifEmpresa = nifEmpresa;
		this.correoElectronico = correoElectronico;
	}

	public NotificacionCorreoElectronico() {
		super();
	}
	
	public NotificacionCorreoElectronicoPendiente pasarAPendiente() {
		return new NotificacionCorreoElectronicoPendiente(
				this.getProvincia(),
				this.getCodigoOS(), 
				this.getFechaDiligencia(),
				this.getNifEmpresa(),
				this.getCorreoElectronico());

	}

	public Provincias getProvincia() {
		return provincia;
	}

	public void setProvincia(Provincias provincia) {
		this.provincia = provincia;
	}

	public NotificacionCorreoElectronico pasarAAceptada(NotificacionCorreoElectronicoPendiente nPendiente) {
		
		return new NotificacionCorreoElectronico(
				nPendiente.getCodigoNotificacion(),
				nPendiente.getProvincia(),
				nPendiente.getCodigoOS(), 
				nPendiente.getFechaDiligencia(),
				nPendiente.getNifEmpresa(),
				nPendiente.getCorreoElectronico());
	}
}