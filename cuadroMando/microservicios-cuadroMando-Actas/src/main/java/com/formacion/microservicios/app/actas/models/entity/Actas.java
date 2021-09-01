package com.formacion.microservicios.app.actas.models.entity;

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
@Table(name="lince_actas_liquidacion")
public class Actas {

	@Id
	@Column(name="c_cod_acta")
	private String id;
	
	@Column(name="d_fecha_creacion")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaCreacion;
	
	@Column(name="n_cod_naturaleza")
	private Long naturalezaID;
	
	@Column(name="desc_naturaleza")
	private String naturaleza;
	
	@ManyToOne
	@JoinColumn(name = "n_cod_actuante", referencedColumnName = "n_cod_usuario")
	private Usuario actuante;
	
	@ManyToOne
	@JoinColumn(name = "n_cod_usuario", referencedColumnName = "n_cod_usuario")
	private Usuario usuarioCreacion;

	@ManyToOne
    @JoinColumn(name = "n_cod_estado", referencedColumnName = "n_cod_estado")
	private Estados estado;

	@ManyToOne
    @JoinColumn(name = "n_cod_provincia", referencedColumnName = "n_cod_provincia")
	private Provincias provincia;

	@PrePersist
	public void prePersist() {
		this.fechaCreacion = new Date();
	}

	public Actas() {
		super();
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

	public Long getNaturalezaID() {
		return naturalezaID;
	}

	public void setNaturalezaID(Long naturalezaID) {
		this.naturalezaID = naturalezaID;
	}

	public String getNaturaleza() {
		return naturaleza;
	}

	public void setNaturaleza(String naturaleza) {
		this.naturaleza = naturaleza;
	}

	public Usuario getActuante() {
		return actuante;
	}

	public void setActuante(Usuario actuante) {
		this.actuante = actuante;
	}

	public Usuario getUsuarioCreacion() {
		return usuarioCreacion;
	}

	public void setUsuarioCreacion(Usuario usuarioCreacion) {
		this.usuarioCreacion = usuarioCreacion;
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
}