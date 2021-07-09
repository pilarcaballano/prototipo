CREATE DATABASE bd_prototipo;

USE bd_prototipo;

CREATE TABLE bd_prototipo.Notificacion_Correo_Electronico(
	n_cod_notificacion INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	n_cod_provincia INT NOT NULL,
	c_cod_os VARCHAR(20) NOT NULL,
	d_fecha_diligencia DATE NOT NULL,
	c_cod_nif_empresa VARCHAR (20) NOT NULL,
	des_correo_electronico VARCHAR (50))
	COMMENT = 'Tabla donde notificar los correos electrónicos';
	
	
CREATE TABLE bd_prototipo.Provincias(
	n_cod_provincia INT PRIMARY KEY NOT NULL,
	des_provincia VARCHAR (50) NOT NULL)
	COMMENT = 'Tabla donde se encuentran las provincias';
	
CREATE TABLE bd_prototipo.Notificacion_Correo_Electronico_Pendiente(
	n_cod_notificacion INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	n_cod_provincia INT NOT NULL,
	c_cod_os VARCHAR(20) NOT NULL,
	d_fecha_diligencia DATE NOT NULL,
	c_cod_nif_empresa VARCHAR (20) NOT NULL,
	des_correo_electronico VARCHAR (50))
	COMMENT = 'Tabla que almacena las solicitudes de cambio de email pendientes de revisar.';