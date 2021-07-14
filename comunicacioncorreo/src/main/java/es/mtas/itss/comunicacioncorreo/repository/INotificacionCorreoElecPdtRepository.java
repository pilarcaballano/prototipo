package es.mtas.itss.comunicacioncorreo.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.mtas.itss.comunicacioncorreo.model.NotificacionCorreoElectronicoPendiente;


public interface INotificacionCorreoElecPdtRepository extends JpaRepository<NotificacionCorreoElectronicoPendiente, Integer> {

	@Query(value = "SELECT "
			+ "ncep.n_cod_notificacion, "
			+ "ncep.n_cod_provincia, "
			+ "(SELECT p.des_provincia FROM provincias p WHERE p.n_cod_provincia = ncep.n_cod_provincia) "
			+ "as des_provincia, "
			+ "ncep.c_cod_os, "
			+ "ncep.d_fecha_diligencia, "
			+ "DATE(ncep.d_fecha_diligencia), "
			+ "ncep.c_cod_nif_empresa, "
			+ "ncep.des_correo_electronico "
			+ "FROM notificacion_correo_electronico_pendiente ncep", nativeQuery = true)
	List<NotificacionCorreoElectronicoPendiente> obtenerPendientes();
	
	@Modifying
	@Query(value="DELETE FROM notificacion_correo_electronico_pendiente "
			+ "WHERE n_cod_notificacion = :codigoNotificacion", nativeQuery = true)
	Integer eliminarNotificacionPendiente(@Param ("codigoNotificacion") Integer codigoNotificacion);
	
}