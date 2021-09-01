package com.formacion.mircorservicios.commons.estados.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "lince_estados")
public class Estados {

	@Id
	@Column(name = "n_cod_estado")
	private Long estadoID;

	@Column(name = "desc_estado")
	private String estado;
	
	public Estados(Long estadoID, String estado) {
		this.estadoID = estadoID;
		this.estado = estado;
	}

	public Estados() {
		super();
	}

	public Long getEstadoID() {
		return estadoID;
	}

	public void setEstadoID(Long estadoID) {
		this.estadoID = estadoID;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	@Override
	public boolean equals(Object obj) {

		if(this == obj) {
			return true;
		}

		if(!(obj instanceof Estados)) {
			return false;
		}

		Estados e = (Estados) obj;

		return this.estadoID != null && this.estadoID.equals(e.getEstadoID());
	}
}