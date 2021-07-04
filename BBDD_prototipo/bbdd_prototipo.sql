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
	
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('04', 'Almería');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('11', 'Cádiz');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('14', 'Córdoba');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('18', 'Granada');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('21', 'Huelva');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('23', 'Jaén');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('29', 'Málaga');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('41', 'Sevilla');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('22', 'Huesca');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('44', 'Teruel');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('50', 'Zaragoza');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('33', 'Asturias');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('07', 'Balears, Illes');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('35', 'Palmas, Las');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('38', 'Santa Cruz de Tenerife');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('39', 'Cantabria');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('05', 'Ávila');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('09', 'Burgos');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('24', 'León');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('34', 'Palencia');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('37', 'Salamanca');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('40', 'Segovia');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('42', 'Soria');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('47', 'Valladolid');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('49', 'Zamora');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('02', 'Albacete');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('13', 'Ciudad Real');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('16', 'Cuenca');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('19', 'Guadalajara');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('45', 'Toledo');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('08', 'Barcelona');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('17', 'Girona');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('25', 'Lleida');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('43', 'Tarragona');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('03', 'Alicante/Alacant');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('12', 'Castellón/Castelló');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('46', 'Valencia/València');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('06', 'Badajoz');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('10', 'Cáceres');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('15', 'Coruña, A');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('27', 'Lugo');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('32', 'Ourense');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('36', 'Pontevedra');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('28', 'Madrid');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('30', 'Murcia');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('31', 'Navarra');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('01', 'Araba/Álava');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('48', 'Bizkaia');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('20', 'Gipuzkoa');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('26', 'Rioja, La');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('51', 'Ceuta');
INSERT INTO Provincias (n_cod_provincia, des_provincia) VALUES ('52', 'Melilla');