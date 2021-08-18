import { NgModule } from '@angular/core';
import { AzulejoComponent } from './azulejo/azulejo.component';
import { NavegacionModule } from '../navegacion/navegacion.module';
import * as _moment from 'moment';
import { BackButtonComponent } from './back-button/back-button.component';
import { MaterialModule } from './material/material.module';
import { ListadoResultadosModule } from './listado-resultados/listado-resultados.module';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [AzulejoComponent, BackButtonComponent],
  imports: [
    MaterialModule,
    ListadoResultadosModule,
    CommonModule
  ],
  exports: [
    MaterialModule, //Hey!!! Todos los modulos de material ahora van aqui!
    
    //Y aqui abajo, todos nuestros modulos y componentes compartidos
    ListadoResultadosModule,
    NavegacionModule,
    AzulejoComponent,
    BackButtonComponent,

    //Tuberias
    DatePipe
  ]

})
export class SharedModule { }
