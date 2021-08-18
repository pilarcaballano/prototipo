import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotificacionCorreoElectronico } from 'src/app/model/comunicacionCorreo/notificacionCorreoElectronico';


@Injectable({
  providedIn: 'root'
})

export class ComunicacioncorreoService {

//   api_key : string;

  constructor(private http: HttpClient) { 
    }

    readonly JSON_HEADER = new HttpHeaders({
        "Content-Type": "application/json"
      });

  crearNotificacionCE(notificacionCorreoElec: NotificacionCorreoElectronico): Observable<any> {
    // const headers = new HttpHeaders({
    //   "Content-Type": "application/json",
    //   "apikey": this.api_key
    //   "Authorization": 'Bearer ' +this.authService.getToken()
    // });

    return this.http
      .post(environment.cuadroMandoURL + "api/comcorreo/comunicacioncorreo", notificacionCorreoElec, {headers: this.JSON_HEADER })
      .pipe(catchError(err => this.handleHttpError(err)));
  }

  getSolicitudesPendientes(): Observable<any> {
    return this.http.get(environment.cuadroMandoURL + "solicitudes-pendientes", {headers: this.JSON_HEADER })
    .pipe(retry(3), catchError(err => this.handleHttpError(err)));
  }

  async getNumSolicitudesPendientes(): Promise<any> {
    return this.http.get(environment.cuadroMandoURL + "num-solicitudes-pendientes", {headers: this.JSON_HEADER })
    .pipe(retry(3), catchError(err => this.handleHttpError(err)))
    .toPromise();
  }

  async getNumSolicitudes(): Promise<any> {

    return this.http.get(environment.cuadroMandoURL + "num-solicitudes-pendientes", {headers: this.JSON_HEADER })
    .pipe(retry(3), catchError(err => this.handleHttpError(err)))
    .toPromise();
  }

  aceptarNotificacionCE(notificacionesCorreoElec: NotificacionCorreoElectronico): Observable<any> {

    return this.http
      .post(environment.cuadroMandoURL + "aceptarNotificacion", notificacionesCorreoElec, { headers: this.JSON_HEADER  })
      .pipe(catchError( err => this.handleHttpError(err)));     
  }

  rechazarNotificacionCE(notificacionesCorreoElec: any): Observable<any> {

    return this.http
      .post(environment.cuadroMandoURL + "rechazarNotificacion", notificacionesCorreoElec, { headers: this.JSON_HEADER  })
      .pipe(catchError( err => this.handleHttpError(err)));;
  }

  private handleHttpError(error : HttpErrorResponse ) {
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
