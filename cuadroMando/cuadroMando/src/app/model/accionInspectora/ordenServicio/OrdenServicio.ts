import { EstadoOS } from "../../mando/EstadosOS";
import { Provincia } from "../../mando/Provincia";
import { User } from "../../User";

export class OrdenServicio{
    id?: string;
    fechaCreacion?: Date;
    actuante?: User;
    usuarioCreacion?: User;
    provincia?: Provincia;
    estado?: EstadoOS;
    observaciones?: string;

    constructor(){
        this.provincia = {}
        this.estado = {}
        this.actuante = {}
        this.usuarioCreacion = {}
    }
}

