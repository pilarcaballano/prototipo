import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { NotificacionCorreoElectronico } from '../models/notificacionCorreoElectronico';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotificacionError } from '../models/notificacionError';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from './auth.service';
import { TokenObj } from '../models/tokenObj';


@Injectable({
  providedIn: 'root'
})

export class ComunicacioncorreoService {

  constructor(private http: HttpClient,
    private dialog: MatDialog,
    private authService: AuthService) { }

  getProvincias(): Observable<any> {

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + this.authService.getToken()
    });

    // headers.set('Authorization', 'Bearer ' + this.authService.getJWTToken());
    // headers.set('Authorization', '');
    this.authService.getJWTToken().subscribe(res => {
      console.log(res);
      console.log(res['access_token']);
    });
    return this.http.get(environment.apiURL + "provincias", {headers});
    // .pipe(retry(3), catchError(err => this.handleHttpError(err)));
  }

  crearNotificacionCE(notificacionCorreoElec: NotificacionCorreoElectronico): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' +this.authService.getToken()
    });

    return this.http
      .post(environment.apiURL + "comunicacioncorreo", notificacionCorreoElec, { headers })
      .pipe(catchError(err => this.handleHttpError(err)));
  }

  getSolicitudesPendientes(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + this.authService.getToken()
    });

    return this.http.get(environment.apiURL + "solicitudes-pendientes", {headers})
    .pipe(retry(3), catchError(err => this.handleHttpError(err)));
  }

  async getNumSolicitudesPendientes(): Promise<any> {
    const headers = new HttpHeaders({
      "Content-Type": "text",
      "Authorization": 'Bearer ' + this.authService.getToken()
    });

    return this.http.get(environment.apiURL + "num-solicitudes-pendientes", {headers})
    .pipe(retry(3), catchError(err => this.handleHttpError(err)))
    .toPromise();
  }

  async getNumSolicitudes(): Promise<any> {
    const headers = new HttpHeaders({
      "Content-Type": "text",
      "Authorization": 'Bearer ' + this.authService.getToken()
    });

    return this.http.get(environment.apiURL + "num-solicitudes-pendientes", {headers})
    .pipe(retry(3), catchError(err => this.handleHttpError(err)))
    .toPromise();
  }

  aceptarNotificacionCE(notificacionesCorreoElec: NotificacionCorreoElectronico): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + this.authService.getToken()
      
    });

    return this.http
      .post(environment.apiURL + "aceptarNotificacion", notificacionesCorreoElec, { headers })
      .pipe(catchError( err => this.handleHttpError(err)));     
  }

  rechazarNotificacionCE(notificacionesCorreoElec: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + this.authService.getToken()
    });

    return this.http
      .post(environment.apiURL + "rechazarNotificacion", notificacionesCorreoElec, { headers })
      .pipe(catchError( err => this.handleHttpError(err)));;
  }

  private handleHttpError(error : HttpErrorResponse ): Observable<NotificacionError> {
    let dataError = new NotificacionError();
    dataError.errorNumber = error.error.statusCode;
    // dataError.errorMsg = error.error.statusText;
    dataError.friendlyMsg = error.error.message != null ? error.error.message : 'Error inesperado';
    window.alert(dataError.friendlyMsg);
    console.log(error);
    return throwError(dataError);
  }
}
