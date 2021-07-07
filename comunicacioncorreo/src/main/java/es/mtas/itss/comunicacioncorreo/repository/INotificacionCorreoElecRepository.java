package es.mtas.itss.comunicacioncorreo.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronico;

public interface INotificacionCorreoElecRepository extends JpaRepository<NotificacionCorreoElectronico, Integer> {

//	@Query(value = "SELECT n_cod_notificacion FROM notificacion_correo_electronico nce "
//			+ "WHERE nce.c_cod_os = :codigoOS "
//			+ "AND nce.n_cod_provincia = :codigoProvincia "
//			+ "AND DATE(nce.d_fecha_diligencia) = DATE(:fechaDiligencia) "
//			+ "AND nce.c_cod_nif_empresa = :nifEmpresa", nativeQuery = true)
//	Integer existeRegistro(@Param ("codigoOS") String codigoOS, @Param ("codigoProvincia") Integer codigoProvincia, 
//					@Param ("fechaDiligencia")  Date fechaDiligencia, @Param ("nifEmpresa") String nifEmpresa);
	
	
	@Modifying
	@Query(value = "UPDATE notificacion_correo_electronico nce "
			+ "SET nce.des_correo_electronico = :correoElectronico "
			+ "WHERE nce.c_cod_os = :codigoOS "
			+ "AND nce.n_cod_provincia = :codigoProvincia "
			+ "AND DATE(nce.d_fecha_diligencia) = DATE(:fechaDiligencia) "
			+ "AND nce.c_cod_nif_empresa = :nifEmpresa "
			+ "AND (nce.des_correo_electronico is null "
			+ "OR nce.des_correo_electronico = '')", nativeQuery = true)
	Integer actualizarCorreo(@Param ("correoElectronico") String correoElectronico,
			@Param ("codigoOS") String codigoOS, @Param ("codigoProvincia") Integer codigoProvincia, 
			@Param ("fechaDiligencia")  Date fechaDiligencia, @Param ("nifEmpresa") String nifEmpresa);
	
	
}