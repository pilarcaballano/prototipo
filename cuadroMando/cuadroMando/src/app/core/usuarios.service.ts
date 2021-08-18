import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  readonly JSON_HEADER = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) { }

  /**
   * Obtiene un usuario por ID
   * @param id 
   * @returns 
   */
  public getUserById(id: number): Observable<any> {
    retry(3);
    catchError(this.handleError);
    return this.http.get(environment.cuadroMandoURL + "usuarios", { headers: this.JSON_HEADER, params: { id: id } });
  }

  /**
   * Obtiene un listado de usuarios
   * @param page 
   */
  public getUsuarios(page?: PageEvent, filtros?: { nombre?: string, apellido1?: string, apellido2?: string }) {
    let params: HttpParams = new HttpParams();

    if (filtros) {
      Object.entries(filtros).forEach(([k, v]) => { params = v !== null && v !== undefined ? params.append(k, v) : params })
    }
    
    if (page) {
      Object.entries(page).forEach(([k, v]) => { params = v !== null && v !== undefined ? params.append(k, v) : params })
    }

    retry(3);
    catchError(this.handleError);

    return this.http.get(environment.cuadroMandoURL + "usuarios/list", { headers: this.JSON_HEADER, params: params, });
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
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
