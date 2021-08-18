import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoResultadosComponent } from './listado-resultados/listado-resultados.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { SharedModule } from '../shared.module';
import { MaterialModule } from '../material/material.module';
import { NavegacionModule } from 'src/app/navegacion/navegacion.module';
import { DatoResultadoComponent } from './dato-resultado/dato-resultado.component';



@NgModule({
  declarations: [
    ListadoResultadosComponent,
    ResultadoComponent,
    DatoResultadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavegacionModule
  ],
  exports: [
    ListadoResultadosComponent,
    ResultadoComponent,
    DatoResultadoComponent
  ]
})
export class ListadoResultadosModule { }
