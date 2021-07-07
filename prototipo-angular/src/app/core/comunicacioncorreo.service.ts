import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { NotificacionCorreoElectronico } from '../models/notificacionCorreoElectronico';
import { throwError } from "rxjs";
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AcceptDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}
