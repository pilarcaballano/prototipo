package es.mtas.itss.comunicacioncorreo.model;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity (name = "NotificacionCorreoElectronicosPendiente")
@Table(name = "notificacion_correo_electronico_pendiente")
public class NotificacionCorreoElectronicoPendiente {

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "n_cod_notificacion")
	private Integer codigoNotificacion;
	@Column(name = "n_cod_provincia")
	private Integer codigoProvincia;
	@Column(name = "c_cod_os")
	private String codigoOS;
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	@Column(name = "d_fecha_diligencia")
	private Date fechaDiligencia;
	@Column(name = "c_cod_nif_empresa")
	private String nifEmpresa;
	@Column(name = "des_correo_electronico")
	private String correoElectronico;

	@ManyToOne
    @JoinColumn(name ="n_cod_provincia", referencedColumnName ="n_cod_provincia", insertable =false, updatable =false)
    private Provincias provincia;
	
	@Transient 
	private String desProvincia;
	
	@Transient 
	private String strFechaDiligencia;

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

		return this.fechaDiligencia;
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

	public NotificacionCorreoElectronicoPendiente(Integer codigoNotificacion, Integer codigoProvincia, String codigoOS,
			Date fechaDiligencia, String nifEmpresa, String correoElectronico, String desProvincia) {
		super();
		this.codigoNotificacion = codigoNotificacion;
		this.codigoProvincia = codigoProvincia;
		this.codigoOS = codigoOS;
		this.fechaDiligencia = fechaDiligencia;
		this.nifEmpresa = nifEmpresa;
		this.correoElectronico = correoElectronico;
//		this.desProvincia = desProvincia;
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

	public Provincias getProvincia() {
		return provincia;
	}

	public void setProvincia(Provincias provincia) {
		this.provincia = provincia;
	}

	public String getDesProvincia() {
		return provincia.getDescripcionProvincia();
	}

	public void setDesProvincia(String desProvincia) {
		this.provincia.setDescripcionProvincia(desProvincia);
	}

	public String getStrFechaDiligencia() {
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		return format.format(fechaDiligencia);
	}

	public void setStrFechaDiligencia(String strFechaDiligencia) {
		this.strFechaDiligencia = strFechaDiligencia;
	}
}