package com.formacion.microservicios.app.comunicacioncorreo.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.formacion.microservicios.app.comunicacioncorreo.model.NotificacionCorreoElectronico;

public interface INotificacionCorreoElecRepository extends JpaRepository<NotificacionCorreoElectronico, Integer> {
	
	@Modifying
	@Query(value = "UPDATE lince_notificacion_correo_electronico nce "
			+ "SET nce.des_correo_electronico = :correoElectronico "
			+ "WHERE nce.c_cod_os = :codigoOS "
			+ "AND nce.n_cod_provincia = :codigoProvincia "
			+ "AND DATE(nce.d_fecha_diligencia) = DATE(:fechaDiligencia) "
			+ "AND nce.c_cod_nif_empresa = :nifEmpresa "
			+ "AND (nce.des_correo_electronico is null "
			+ "OR nce.des_correo_electronico = '')", nativeQuery = true)
	Integer actualizarCorreo(@Param ("correoElectronico") String correoElectronico,
			@Param ("codigoOS") String codigoOS, @Param ("codigoProvincia") Long codigoProvincia, 
			@Param ("fechaDiligencia")  Date fechaDiligencia, @Param ("nifEmpresa") String nifEmpresa);
	
	@Modifying
	@Query(value = "UPDATE lince_notificacion_correo_electronico nce "
			+ "SET nce.des_correo_electronico = :correoElectronico "
			+ "WHERE nce.c_cod_os = :codigoOS "
			+ "AND nce.n_cod_provincia = :codigoProvincia "
			+ "AND DATE(nce.d_fecha_diligencia) = DATE(:fechaDiligencia) "
			+ "AND nce.c_cod_nif_empresa = :nifEmpresa", nativeQuery = true)
	Integer actualizarCorreoAceptada(@Param ("correoElectronico") String correoElectronico,
			@Param ("codigoOS") String codigoOS, @Param ("codigoProvincia") Long codigoProvincia, 
			@Param ("fechaDiligencia")  Date fechaDiligencia, @Param ("nifEmpresa") String nifEmpresa);
	
	
}