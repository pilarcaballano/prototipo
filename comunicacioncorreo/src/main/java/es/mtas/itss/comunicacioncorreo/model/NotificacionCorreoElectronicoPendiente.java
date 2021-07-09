package es.mtas.itss.comunicacioncorreo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity (name = "NotificacionCorreoElectronicosPendiente")
@Table(name = "notificacion_correo_electronico_pendiente")
public class NotificacionCorreoElectronicoPendiente {

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "n_cod_notificacion_pdt")
	private Integer codigoNotificacionPdt;
	@Column(name = "n_cod_provincia")
	private Integer codigoProvincia;
	@Column(name = "c_cod_os")
	private String codigoOS;
	@Column(name = "d_fecha_diligencia")
	private Date fechaDiligencia;
	@Column(name = "c_cod_nif_empresa")
	private String nifEmpresa;
	@Column(name = "des_correo_electronico")
	private String correoElectronico;

	/**
	 * @return the codigoNotificacionPdt
	 */
	public Integer getCodigoNotificacionPdt() {
		return codigoNotificacionPdt;
	}

	/**
	 * @param codigoNotificacionPdt the codigoNotificacionPdt to set
	 */
	public void setCodigoNotificacionPdt(Integer codigoNotificacionPdt) {
		this.codigoNotificacionPdt = codigoNotificacionPdt;
	}

	/**
	 * @return the codigoProvincia
	 */
	public Integer getCodigoProvincia() {
		return codigoProvincia;
	}

	/**
	 * @param codigoProvincia the codigoProvincia to set
	 */
	public void setCodigoProvincia(Integer codigoProvincia) {
		this.codigoProvincia = codigoProvincia;
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

	public NotificacionCorreoElectronicoPendiente(Integer codigoNotificacionPdt, Integer codigoProvincia, String codigoOS,
			Date fechaDiligencia, String nifEmpresa, String correoElectronico) {
		super();
		this.codigoNotificacionPdt = codigoNotificacionPdt;
		this.codigoProvincia = codigoProvincia;
		this.codigoOS = codigoOS;
		this.fechaDiligencia = fechaDiligencia;
		this.nifEmpresa = nifEmpresa;
		this.correoElectronico = correoElectronico;
	}
	
	public NotificacionCorreoElectronicoPendiente(Integer codigoProvincia, String codigoOS,
			Date fechaDiligencia, String nifEmpresa, String correoElectronico) {
		super();
		
		this.codigoProvincia = codigoProvincia;
		this.codigoOS = codigoOS;
		this.fechaDiligencia = fechaDiligencia;
		this.nifEmpresa = nifEmpresa;
		this.correoElectronico = correoElectronico;
	}

	public NotificacionCorreoElectronicoPendiente() {
		super();
	}
}