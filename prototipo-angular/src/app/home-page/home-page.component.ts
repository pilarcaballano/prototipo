import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Provincia } from '../models/provincia';
import { TranslateService } from '@ngx-translate/core';
import { ComunicacioncorreoService } from '../core/comunicacioncorreo.service'
import { NotificacionCorreoElectronico } from '../models/notificacionCorreoElectronico';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AcceptDialogComponent } from '../accept-dialog/accept-dialog.component';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from "rxjs";
import { HomePageNifValidator } from './home-page-nif-validator';

@Component({
  selector: 'protangu-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  fontSize = 14;
  @ViewChild('body', {static: true}) body!: ElementRef;

  private el!: ElementRef;

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
              private homePageNifValidator: HomePageNifValidator,
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
      correoElectronico: "",
      desProvincia:  "",
      strFechaDiligencia: ""
      
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
    if(this.nuevaNotCEForm.valid){
      this.notificacionCorreoElectronico = this.nuevaNotCEForm.value;
      this.comcorreo.crearNotificacionCE(this.notificacionCorreoElectronico)
                    .subscribe((notificacionCorreoElectronico: NotificacionCorreoElectronico) => {
                      this.openDialog();
                                          
                    });
    } else {

      this.validateAllFormFields(this.nuevaNotCEForm);
  
    }

  }

  validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }

  iniciarNotificacionCE() {
    this.nuevaNotCEForm = this.fb.group({
      codigoProvincia: [null, [Validators.required]],
      codigoOS: [null, [Validators.required, Validators.pattern('[0-9]{1,2}\/[0-9]{7}\/[0-9]{2}')]],
      fechaDiligencia: [null,[Validators.required]],
      nifEmpresa: [null,Validators.compose([Validators.required,
                      Validators.pattern('^[0-9]{8}[a-zA-Z]{1}$')]),
                      this.homePageNifValidator.validate.bind(this.homePageNifValidator)],
                      
      correoElectronico: [null, [Validators.required, Validators.email]]
    });
  }

  obtenerProvincias() {
    this.comcorreo.getProvincias().subscribe((provs : Provincia[]) => {
      this.provincias = provs;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AcceptDialogComponent, {
      width: '450px',
      data: { titulo: 'Operación completada',
              cuerpo: 'Su petición ha sido enviada y será procesada.',
              boton: 'Aceptar' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.nuevaNotCEForm.reset();
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    // console.log(controlName + " " +this.nuevaNotCEForm.controls[controlName].hasError(errorName)
    // + ": " + errorName);
    return this.nuevaNotCEForm.controls[controlName].hasError(errorName);
  }
}