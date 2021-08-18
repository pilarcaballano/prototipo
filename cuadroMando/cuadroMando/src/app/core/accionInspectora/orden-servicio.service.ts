import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { of } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OrdenServicio } from 'src/app/model/accionInspectora/ordenServicio/OrdenServicio';
import { environment } from 'src/environments/environment';

@Injectable()

export class OrdenServicioService {

  readonly JSON_HEADER = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  /**
  * Obtiene las OS segun filtros
  */
  getListadoOS(page?: PageEvent, filtros?: { id?: string, idProvincia: number, idEstado: number, idActuante?: number, actuante?: string, idUsuarioCreacion?: number, usuarioCreacion?: string, fechaDesde?: Date, fechaHasta?: Date }): Observable<any> {
    let params = new HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([k, v]) => {
        if (v instanceof Date) {
          v = v.toString();
        }
        if (v !== null && v !== undefined && v !== '') {
          params = params.append(k, v);
        }
      });
    }
    if (page) {
      Object.entries(page).forEach(([k, v]) => { params = params.append(k, v) });
    }

    console.log("getListadoOS", params)

    retry(3);
    catchError(this.handleError);
    return this.http.get(environment.cuadroMandoURL + "api/os/lista", { headers: this.JSON_HEADER, params: params });
  }

  /**
   * Obtiene las OS segun id
   */
  getOSById(id: string): Observable<any> {
    retry(3);
    catchError(this.handleError);
    return this.http.get(environment.cuadroMandoURL + "api/os/detalle", { headers: this.JSON_HEADER, params: { id } });
  }

  putOS(os: OrdenServicio): Observable<any> {
    retry(3);
    catchError(this.handleError);
    return this.http.put(environment.cuadroMandoURL + "api/os/detalle", os, { headers: this.JSON_HEADER });
  }

  postOS(os: OrdenServicio): Observable<any> {
    retry(3);
    //catchError(this.handleError);
    catchError(err => { return throwError(err) });
    console.log("OS -->", os);
    return this.http.post(environment.cuadroMandoURL + "api/os/detalle", os, { headers: this.JSON_HEADER });
  }

  /**
   * Obtiene las provincias
   */
  getProvincias(): Observable<any> {
    retry(3);
    catchError(this.handleError)
    let url: string = environment.cuadroMandoURL + "api/provincias";
    console.debug(url);
    return this.http.get(url);
  }

  /**
   * Obtiene los estados
   */
  getEstadosOS(): Observable<any> {
    retry(3);
    catchError(this.handleError)
    return this.http.get(environment.cuadroMandoURL + "api/estados");
  }


  /**
   * Obtiene los estados
   */
  deleteOS(id: string): Observable<any> {
    retry(3);
    catchError(this.handleError)
    return this.http.delete(environment.cuadroMandoURL + "api/os/delete", {
      params: { id: id }
    });

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    if (error.status == 0)
      return of({ status: 600, body: "Se lió un 600" })
    else
      return of({ status: error.status, body: error.error });
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
