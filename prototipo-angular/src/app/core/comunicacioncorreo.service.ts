import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComunicacioncorreoService {

  constructor(private http: HttpClient) { }

  getHola(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "text/plain",
      "response-type": "text"
    });

    return this.http.get(environment.apiURL + "comunicacioncorreo", {headers});
  }

  getProvincias(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      
    });

    return this.http.get(environment.apiURL + "provincias", {headers});
  }
}
