import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Provincia } from '../model/mando/Provincia';
import { NotificacionCorreoElectronico } from '../model/comunicacionCorreo/notificacionCorreoElectronico';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComCorreoNifValidator } from './com-correo-nif-validator';
import { TranslateService } from '@ngx-translate/core';
import { OrdenServicioService } from '../core/accionInspectora/orden-servicio.service';
import { ComunicacioncorreoService } from '../core/com-correo/comunicacioncorreo.service';
import { AcceptDialogComponent } from '../dialogs/accept-dialog/accept-dialog.component';

@Component({
  selector: 'cuadro-com-correo',
  templateUrl: './com-correo.component.html',
  styleUrls: ['./com-correo.component.scss']
})

export class ComCorreoComponent implements OnInit {

  fontSize = 14;
  margin = 15;
  @ViewChild('body', {static: true}) body!: ElementRef;

  private el!: ElementRef;

  public activeLang = 'es';
  provincias! : Provincia[];

  notificacionCorreoElectronico!: NotificacionCorreoElectronico;
  nuevaNotCEForm!: FormGroup;

  constructor(
              private translate: TranslateService, 
              private comcorreo: ComunicacioncorreoService,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private comCorreoNifValidator: ComCorreoNifValidator,
              private osService: OrdenServicioService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit(): void {
    this.changeFont('');
    this.obtenerProvincias();
    this.iniciarNotificacionCE();
  }

  changeFont(operator : string){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    operator === '+' ? this.margin++ : this.margin--;
    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontSize}px`;
    document.getElementsByTagName('body')[0].style.margin  = `${this.margin}px`;
  } 

  public cambiarLenguaje(lang: string) {
    this.activeLang = lang; 
    this.translate.use(lang);
  }

  guardarNotificacionCE() {
    if(this.nuevaNotCEForm.valid){
      this.notificacionCorreoElectronico = this.nuevaNotCEForm.value;
      this.notificacionCorreoElectronico.provincia = { id: this.nuevaNotCEForm.value.codigoProvincia, descProvincia: '' }

      this.comcorreo.crearNotificacionCE(this.notificacionCorreoElectronico)
                    .subscribe((notificacionCorreoElectronico: NotificacionCorreoElectronico) => {
                      this.openDialog();
                      this.nuevaNotCEForm.reset();              
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
                      this.comCorreoNifValidator.validate.bind(this.comCorreoNifValidator)
                    ],
                      
      correoElectronico: [null, [Validators.required, Validators.email]]
    });
  }

  obtenerProvincias() {
     //Obtenemos el combo de provincias
    this.osService.getProvincias().subscribe((prov) => {
      this.provincias = prov;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AcceptDialogComponent, {
      width: '450px',
      data: { titulo: 'Operaci??n completada',
              cuerpo: 'Su petici??n ha sido enviada y ser?? procesada.',
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