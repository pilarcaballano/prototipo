import { User } from "../User";
import { EstadoOS } from "./EstadosOS";
import { Provincia } from "./Provincia";

export interface Listado{
    id?: string;
    estado?: EstadoOS;
    naturaleza?: string;
    naturalezaID?: number;
    fechaCreacion?: string;
    actuante?: User;
    usuarioCreacion?: User;
    provincia?: Provincia;
}