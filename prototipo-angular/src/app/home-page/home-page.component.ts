import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Provincia } from '../models/provincia';
import { TranslateService } from '@ngx-translate/core';
import { ComunicacioncorreoService } from '../core/comunicacioncorreo.service'

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
  selectedProv! : Provincia;
  identificadorOS : string = "";
  fechaDiligencia! : string;
  nifEmpresa: string = "";
  emailEmpresa : string = "";
  OSmask = "00/0000000/00";
  dateMask = "d0/M0/0000";
  nifMask = "S0000000A";
  mailMask = "A*@A*.A*";

  constructor(private translate: TranslateService, private comcorreo: ComunicacioncorreoService) {
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit(): void {
    this.changeFont('');
    this.obtenerProvincias();
  }

  changeFont(operator : string){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontSize}px`;
  } 

  public cambiarLenguaje(lang: string) {
    this.activeLang = lang; 
    this.translate.use(lang);
  }

  pulsarGuardar(event:any) {
    // console.log("Has pulsado el botón guardar");
    // console.log(event);
//    this.comcorreo.postEnviar().subscribe((hola : string) => {
//      this.identificadorOS = hola;
 //   });
    this.comcorreo.getHola().subscribe((hola : string) => {
      this.identificadorOS = hola;
     
    });
  }

  obtenerProvincias() {
    this.comcorreo.getProvincias().subscribe((provs : Provincia[]) => {
      this.provincias = provs;
     
    });
  }
}
