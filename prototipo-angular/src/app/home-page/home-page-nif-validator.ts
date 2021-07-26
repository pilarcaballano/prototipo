import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
import { environment } from "src/environments/environment";
import {Directive, Injectable} from '@angular/core';
import { Observable, of, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
@Directive({
  selector: '[homePageValidator][ngModel],[homePageValidator][FormControl]',
  providers: [
      {provide: NG_ASYNC_VALIDATORS, useExisting: HomePageNifValidator, multi: true}
  ]
})
export class HomePageNifValidator implements AsyncValidator{
    
    constructor(private readonly http: HttpClient) {
    }
    validate(control: AbstractControl): Observable<ValidationErrors | null> {

      // do not call server when input is empty or shorter than 2 characters
      if (!control.value || control.value.length < 8) {
        return null;
      }

      const obs = this.http.get<boolean>(environment.apiURL + 'checkNif?nifEmpresa=' + control.value)
          .pipe(
              map((isUsed) => {
                  // null no error, object for error
                  return !isUsed ? null : {
                    homePageValidator: true
                  };
              })
          );
          
      return obs;
  }
}