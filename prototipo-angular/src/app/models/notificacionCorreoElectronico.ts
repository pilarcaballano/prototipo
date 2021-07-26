import { Provincia } from "./provincia";

export interface NotificacionCorreoElectronico{
    codigoNotificacion: number;
    codigoProvincia: number;
    codigoOS: string;
    fechaDiligencia: string;
    nifEmpresa: string;
    correoElectronico: string;
    desProvincia: string;
    strFechaDiligencia: string;
}