import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, retry } from "rxjs/operators";




@Injectable()
export class MandoService {
  readonly JSON_HEADER = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {

  }

  /**
   * Obtiene las OS segun estado
   */
  getOS(filter: any): Observable<any> {
    retry(3);
    catchError(this.handleError);
    return this.http.get(environment.cuadroMandoURL + "api/os/lista", {headers: this.JSON_HEADER, params: {...filter}});
  }

  /**
   * Devuelve el total de OS segun estado
   * @param estadoID 
   * @returns 
   */
  getCountOS(filter: any): Observable<any> {
    retry(3);
    catchError(this.handleError)
    return this.http.get(environment.cuadroMandoURL + "api/os/count", {headers: this.JSON_HEADER, params: {...filter}});
  }


  /**
   * Obtiene las Actas segun estado
   */
  getActas(filter: any): Observable<any> {
    retry(3);
    catchError(this.handleError);
    return this.http.get(environment.cuadroMandoURL + "api/actas/lista/", {headers: this.JSON_HEADER, params: {...filter}});
  }

  /**
   * Devuelve el total de OS segun estado
   * @param estadoID 
   * @returns 
   */
  getCountActas(filter: any): Observable<any> {
    retry(3);
    catchError(this.handleError);
    return this.http.get(environment.cuadroMandoURL + "api/actas/count", {headers: this.JSON_HEADER, params: {...filter}});
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
