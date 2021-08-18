import { InjectionToken } from "@angular/core";

export const MANDO_FILTER_TOKEN = new InjectionToken<Filter>("Filtro de datos de consulta", {
    providedIn: 'root',
    factory: () => new Filter()
})

export class Filter {
    idEstado?: number;

    //Objetos del paginador
    paginatorSize?: number; //Tamaño de la página
    paginatorIndex?: number; //Número de la página
}