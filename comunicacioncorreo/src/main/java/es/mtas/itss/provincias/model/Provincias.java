package es.mtas.itss.provincias.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Provincias {

	@Id
	@Column(name = "n_cod_provincia")
	private Integer codigoProvincia;

	@Column(name = "des_provincia")
	private String descripcionProvincia;

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
	 * @return the descripcionProvincia
	 */
	public String getDescripcionProvincia() {
		return descripcionProvincia;
	}

	/**
	 * @param descripcionProvincia the descripcionProvincia to set
	 */
	public void setDescripcionProvincia(String descripcionProvincia) {
		this.descripcionProvincia = descripcionProvincia;
	}

	public Provincias(Integer codigoProvincia, String descripcionProvincia) {
		super();
		this.codigoProvincia = codigoProvincia;
		this.descripcionProvincia = descripcionProvincia;
	}

	public Provincias() {
		super();
	}
}
