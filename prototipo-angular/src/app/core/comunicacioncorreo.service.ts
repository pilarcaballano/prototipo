import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { NotificacionCorreoElectronico } from '../models/notificacionCorreoElectronico';
import { pipe, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { MatDialog } from '@angular/material/dialog';
import { AcceptDialogComponent } from '../accept-dialog/accept-dialog.component';


@Injectable({
  providedIn: 'root'
})

export class ComunicacioncorreoService {

  constructor(private http: HttpClient,
    private dialog: MatDialog) { }

  getProvincias(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.get(environment.apiURL + "provincias", {headers});
  }

  crearNotificacionCE(notificacionCorreoElec: NotificacionCorreoElectronico): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http
      .post(environment.apiURL + "comunicacioncorreo", notificacionCorreoElec, { headers });
  }

  getSolicitudesPendientes(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.get(environment.apiURL + "solicitudes-pendientes", {headers});
  }

  async getNumSolicitudesPendientes(): Promise<any> {
    const headers = new HttpHeaders({
      "Content-Type": "text",
    });

    return this.http.get(environment.apiURL + "num-solicitudes-pendientes", {headers}).toPromise();
  }

  async getNumSolicitudes(): Promise<any> {
    const headers = new HttpHeaders({
      "Content-Type": "text",
    });

    return this.http.get(environment.apiURL + "num-solicitudes-pendientes", {headers})
    .toPromise();
  }

  aceptarNotificacionCE(notificacionesCorreoElec: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http
      .post(environment.apiURL + "aceptarNotificacion", notificacionesCorreoElec, { headers });
  }

  rechazarNotificacionCE(notificacionesCorreoElec: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http
      .post(environment.apiURL + "rechazarNotificacion", notificacionesCorreoElec, { headers });
  }
}
