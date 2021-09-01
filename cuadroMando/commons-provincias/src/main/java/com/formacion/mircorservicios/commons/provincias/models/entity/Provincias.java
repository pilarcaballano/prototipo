package com.formacion.mircorservicios.commons.provincias.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "lince_provincias")
public class Provincias {

	@Id
	@Column(name = "n_cod_provincia")
	private Long id;

	@Column(name = "des_provincia")
	private String descProvincia;
	
	public Provincias(Long id, String descProvincia) {
		this.id = id;
		this.descProvincia = descProvincia;
	}

	public Provincias() { }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescProvincia() {
		return descProvincia;
	}

	public void setDescProvincia(String descProvincia) {
		this.descProvincia = descProvincia;
	}

	@Override
	public boolean equals(Object obj) {

		if(this == obj) {
			return true;
		}

		if(!(obj instanceof Provincias)) {
			return false;
		}

		Provincias e = (Provincias) obj;

		return this.id != null && this.id.equals(e.getId());
	}
}
