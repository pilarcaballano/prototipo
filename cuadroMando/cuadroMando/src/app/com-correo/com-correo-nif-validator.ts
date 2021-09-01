import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
import { environment } from "src/environments/environment";
import {Directive, Injectable} from '@angular/core';
import { Observable, of, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
// import { AuthService } from "../core/auth.service";

@Injectable({ providedIn: 'root' })
@Directive({
  selector: '[comCorreoValidator][ngModel],[comCorreoValidator][FormControl]',
  providers: [
      {provide: NG_ASYNC_VALIDATORS, useExisting: ComCorreoNifValidator, multi: true}
  ]
})
export class ComCorreoNifValidator implements AsyncValidator{
    
    constructor(private readonly http: HttpClient
      // ,private authService: AuthService
      ) {
    }
    validate(control: AbstractControl): Observable<ValidationErrors | null> {

      // do not call server when input is empty or shorter than 2 characters
      if (!control.value || control.value.length < 8) {
        return null;
      }

      const headers = new HttpHeaders({
        "Content-Type": "application/json",
        // "Authorization": 'Bearer ' + this.authService.getToken()
      });
  

      const obs = this.http.get<boolean>(
        environment.cuadroMandoURL + "api/comcorreo/checkNif?nifEmpresa=" + control.value, {headers})
          .pipe(
              map((isUsed) => {
                  // null no error, object for error
                  return !isUsed ? null : {
                    comCorreoValidator: true
                  };
              })
          );
          
      return obs;
  }
}