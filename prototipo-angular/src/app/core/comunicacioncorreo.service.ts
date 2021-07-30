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

  api_key : string;

  constructor(private http: HttpClient,
    private dialog: MatDialog,
    private authService: AuthService) { 
      this.api_key = "eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjb211bmljYWNpb25jb3JyZW9AY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJjb211bmljYWNpb25jb3JyZW8iLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiMTBQZXJNaW4iLCJuYW1lIjoiVGVzdEFwcCIsImlkIjo2LCJ1dWlkIjoiYTg5MGQ5OTktM2MxYy00OWJhLTlkYjctN2E0MjgzZDg2Yzk1In0sImlzcyI6Imh0dHBzOlwvXC9sb2NhbGhvc3Q6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IkJyb256ZSI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJTQU5EQk9YIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlByb3RvdGlwb0FuZ3VsYXIiLCJjb250ZXh0IjoiXC9wcm90YW5ndVwvdjEiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJCcm9uemUifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiY29tY29ycmVvIiwiY29udGV4dCI6IlwvY29tY29ycmVvXC92MC4wLjEiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiJ2MC4wLjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiQnJvbnplIn1dLCJwZXJtaXR0ZWRJUCI6IiIsImlhdCI6MTYyNzU1NjE1OCwianRpIjoiOGMxZjZhMTQtOWIzOS00NzI2LWJlYzMtMDllNDNhNzZkOTQ1In0=.nGsXFPwriLBlXxul5fe4sCjTGfj7usZPVoNHvOCyQ2vSpgMKtPJBTYeIqcasgDvxA2ziXwK0C2Bd-SpTPgWlfWCLW9PBulFtWrTmgnRpT7HYq2REVJ2CNHKEukYJaWf0VCEgSPEZi3WfOaOqBXe_CFlqdjK8bof6BIZO9w8-MedtscpZjZnTkseLgosm2rv6hNPLpO4NPlUH8SAUZCXu1a8U26oLEtlBvdu1yryRNUQTjabJBegAsu2B04KEGqGyL4sFmqmhgQPfScuCvslTLWlJYHEvmZzdmbsZJqUnAfiqNw3MRc34FVEhBiK3G0jNEBKA1dw545ffmiCQPAdAig==";
    }

  getProvincias(): Observable<any> {

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "apikey": this.api_key
    });

    // headers.set('Authorization', 'Bearer ' + this.authService.getJWTToken());
    // headers.set('Authorization', '');
    // this.authService.getJWTToken().subscribe(res => {
    //   console.log(res);
    //   console.log(res['access_token']);
    // });
    console.log(this.api_key)
    return this.http.get(environment.apiURL + "provincias", {headers});
    // .pipe(retry(3), catchError(err => this.handleHttpError(err)));
  }

  crearNotificacionCE(notificacionCorreoElec: NotificacionCorreoElectronico): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "apikey": this.api_key
      // "Authorization": 'Bearer ' +this.authService.getToken()
    });

    return this.http
      .post(environment.apiURL + "comunicacioncorreo", notificacionCorreoElec, { headers })
      .pipe(catchError(err => this.handleHttpError(err)));
  }

  getSolicitudesPendientes(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "apikey": this.api_key
      // "Authorization": 'Bearer ' + this.authService.getToken()
    });

    return this.http.get(environment.apiURL + "solicitudes-pendientes", {headers})
    .pipe(retry(3), catchError(err => this.handleHttpError(err)));
  }

  async getNumSolicitudesPendientes(): Promise<any> {
    const headers = new HttpHeaders({
      "Content-Type": "text",
      "apikey": this.api_key
      // "Authorization": 'Bearer ' + this.authService.getToken()
    });

    return this.http.get(environment.apiURL + "num-solicitudes-pendientes", {headers})
    .pipe(retry(3), catchError(err => this.handleHttpError(err)))
    .toPromise();
  }

  async getNumSolicitudes(): Promise<any> {
    const headers = new HttpHeaders({
      "Content-Type": "text",
      "apikey": this.api_key
      // "Authorization": 'Bearer ' + this.authService.getToken()
    });

    return this.http.get(environment.apiURL + "num-solicitudes-pendientes", {headers})
    .pipe(retry(3), catchError(err => this.handleHttpError(err)))
    .toPromise();
  }

  aceptarNotificacionCE(notificacionesCorreoElec: NotificacionCorreoElectronico): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "apikey": this.api_key
      // "Authorization": 'Bearer ' + this.authService.getToken()
      
    });

    return this.http
      .post(environment.apiURL + "aceptarNotificacion", notificacionesCorreoElec, { headers })
      .pipe(catchError( err => this.handleHttpError(err)));     
  }

  rechazarNotificacionCE(notificacionesCorreoElec: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "apikey": this.api_key
      // "Authorization": 'Bearer ' + this.authService.getToken()
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
