import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Provincia } from '../models/provincia';
import { TranslateService } from '@ngx-translate/core';
import { ComunicacioncorreoService } from '../core/comunicacioncorreo.service'
import { NotificacionCorreoElectronico } from '../models/notificacionCorreoElectronico';

@Component({
  selector: 'protangu-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  fontSize = 14;
  @ViewChild('body', {static: true}) body!: ElementRef;

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
                  .subscribe((notificacionCorreoElectronico: NotificacionCorreoElectronico) => {
                    console.log(notificacionCorreoElectronico)
                    this.nuevaNotCEForm.reset();
                    this.router.navigate(["/mail"])
                  });

  }

  iniciarNotificacionCE() {
    this.nuevaNotCEForm = this.fb.group({
      codigoOS : "",
      codigoProvincia: 0,
      fechaDiligencia : "",
      nifEmpresa: "",
      correoElectronico : ""
    });
  }

  obtenerProvincias() {
    this.comcorreo.getProvincias().subscribe((provs : Provincia[]) => {
      this.provincias = provs;
    });
  }

  
}
