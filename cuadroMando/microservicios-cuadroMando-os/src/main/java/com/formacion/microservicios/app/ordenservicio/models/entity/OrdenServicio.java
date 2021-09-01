package com.formacion.microservicios.app.ordenservicio.models.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.formacion.mircorservicios.commons.estados.models.entity.Estados;
import com.formacion.mircorservicios.commons.provincias.models.entity.Provincias;
import com.formacion.mircorservicios.commons.usuarios.models.entity.Usuario;

@Entity
@Table(name="lince_os")
public class OrdenServicio {

	@Id
	@Column(name="c_cod_os")
	private String id;

	@Column(name="d_fecha_creacion")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaCreacion;

	@ManyToOne
    @JoinColumn(name = "n_cod_actuante", referencedColumnName = "n_cod_usuario")
	private Usuario actuante;
	
	@ManyToOne
    @JoinColumn(name = "n_cod_usuario", referencedColumnName = "n_cod_usuario")
	private Usuario usuarioCreacion;

	@ManyToOne
    @JoinColumn(name="n_cod_estado")
	private Estados estado;

	@ManyToOne
    @JoinColumn(name = "n_cod_provincia")
	private Provincias provincia;

	@Column(name = "c_observaciones")
	private String observaciones;
	
	public OrdenServicio() {}

	@PrePersist
	public void prePersist() {
		this.fechaCreacion = new Date();
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Usuario getActuante() {
		return actuante;
	}

	public void setActuante(Usuario actuante) {
		this.actuante = actuante;
	}

	public Estados getEstado() {
		return estado;
	}

	public void setEstado(Estados estado) {
		this.estado = estado;
	}

	public Provincias getProvincia() {
		return provincia;
	}

	public void setProvincia(Provincias provincia) {
		this.provincia = provincia;
	}

	public Usuario getUsuarioCreacion() {
		return usuarioCreacion;
	}

	public void setUsuarioCreacion(Usuario usuarioCreacion) {
		this.usuarioCreacion = usuarioCreacion;
	}

	public String getObservaciones() {
		return observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

}