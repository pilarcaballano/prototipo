import { InjectionToken } from "@angular/core";

export const AI_OS_FILTER_TOKEN = new InjectionToken<FilterOS>("Filtro de datos de consulta", {
    providedIn: 'root',
    factory: () => new FilterOS()
})

export class FilterOS {
    id?: string;

}