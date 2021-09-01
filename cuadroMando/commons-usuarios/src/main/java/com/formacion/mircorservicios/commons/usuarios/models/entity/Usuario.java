package com.formacion.mircorservicios.commons.usuarios.models.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "lince_usuarios")
public class Usuario {

	@Id
	@Column(name = "n_cod_usuario")
	private Long id;

	@Column(name = "c_desc_nombre", nullable = false)
	private String nombre;

	@Column(name = "c_desc_apellido1", nullable = false)
	private String apellido1;
	
	@Column(name = "c_desc_apellido2")
	private String apellido2;
	
	@Column(name = "b_activo", columnDefinition = "boolean default true")
	private String activo;
	
	@Column(name = "d_fecha_creacion")
	private Date fechaCreacion;

	@Column(name = "d_fecha_modificacion")
	private Date fechaModificacion;
	

	public Usuario() { }

	public Usuario(Long id, String nombre, String apellido1, String apellido2, String activo, Date fechaCreacion,
			Date fechaModificacion) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido1 = apellido1;
		this.apellido2 = apellido2;
		this.activo = activo;
		this.fechaCreacion = fechaCreacion;
		this.fechaModificacion = fechaModificacion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido1() {
		return apellido1;
	}

	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}

	public String getApellido2() {
		return apellido2;
	}

	public void setApellido2(String apellido2) {
		this.apellido2 = apellido2;
	}

	public String getActivo() {
		return activo;
	}

	public void setActivo(String activo) {
		this.activo = activo;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Date getFechaModificacion() {
		return fechaModificacion;
	}

	public void setFechaModificacion(Date fechaModificacion) {
		this.fechaModificacion = fechaModificacion;
	}

	@Override
	public boolean equals(Object obj) {

		if(this == obj) {
			return true;
		}

		if(!(obj instanceof Usuario)) {
			return false;
		}

		Usuario e = (Usuario) obj;

		return this.id != null && this.id.equals(e.getId());
	}
}