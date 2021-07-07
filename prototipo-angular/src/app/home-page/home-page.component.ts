import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Provincia } from '../models/provincia';
import { TranslateService } from '@ngx-translate/core';
import { ComunicacioncorreoService } from '../core/comunicacioncorreo.service'
import { NotificacionCorreoElectronico } from '../models/notificacionCorreoElectronico';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AcceptDialogComponent } from '../accept-dialog/accept-dialog.component';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from "rxjs";

@Component({
  selector: 'protangu-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  fontSize = 14;
  @ViewChild('body', {static: true}) body!: ElementRef;

  @ViewChild('firstDialog', { static: true }) firstDialog!: TemplateRef<any>;

  openFirstDialog() {
    this.dialog.open(this.firstDialog);
  }

  public activeLang = 'es';
  provincias! : Provincia[];
  OSmask = "00/0000000/00";
  dateMask = "d0/M0/0000";
  nifMask = "S0000000A";
  mailMask = "A*@A*.A*";

  notificacionCorreoElectronico!: NotificacionCorreoElectronico;
  nuevaNotCEForm!: FormGroup;

  constructor(private translate: TranslateService, 
              private comcorreo: ComunicacioncorreoService,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit(): void {
    this.changeFont('');
    this.obtenerProvincias();
    this.iniciarNotificacionCE();
    this.notificacionCorreoElectronico = {
      codigoNotificacion: 0,
      codigoProvincia: 0,
      codigoOS: "",
      fechaDiligencia: "",
      nifEmpresa: "",
      correoElectronico: ""
    };
  }

  changeFont(operator : string){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontSize}px`;
  } 

  public cambiarLenguaje(lang: string) {
    this.activeLang = lang; 
    this.translate.use(lang);
  }

  guardarNotificacionCE() {
    this.notificacionCorreoElectronico = this.nuevaNotCEForm.value;
    this.comcorreo.crearNotificacionCE(this.notificacionCorreoElectronico)
                  .pipe(catchError(this.handleError))
                  .subscribe((notificacionCorreoElectronico: NotificacionCorreoElectronico) => {
                    this.openDialog();
                                        
                  });

  }

  iniciarNotificacionCE() {
    this.nuevaNotCEForm = this.fb.group({
      codigoProvincia: 0,
      codigoOS: "",
      fechaDiligencia: "",
      nifEmpresa: "",
      correoElectronico: ""
    });
  }

  obtenerProvincias() {
    this.comcorreo.getProvincias().subscribe((provs : Provincia[]) => {
      this.provincias = provs;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AcceptDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private handleError(error: HttpErrorResponse) {
    // if (error.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error("An error occurred:", error.error.message);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues about what went wrong,
    //   console.error(
    //     `Backend returned code ${error.status}, ` + `body was: ${error.error}`
    //   );
    // }
    // // return an observable with a user-facing error message
    // return throwError("Something bad happened; please try again later.");
    // this.openDialog();
    window.alert(`Se ha producido un error inesperado`);
    return throwError("Something bad happened; please try again later.");
  }
}