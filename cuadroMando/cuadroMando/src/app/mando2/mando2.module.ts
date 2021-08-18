import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MandoComponent } from './mando/mando.component';
import { SharedModule } from '../shared/shared.module';
import { DialogoListadoComponent } from './dialogo-listado/dialogo-listado.component';
import { MandoService } from '../core/mando.service';



@NgModule({
  declarations: [
    MandoComponent,
    DialogoListadoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [],
  providers: [MandoService]
})
export class Mando2Module { }
