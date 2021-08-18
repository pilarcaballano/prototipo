import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MandoComponent } from './mando.component';
import { ListadoAzulejosComponent } from './listado-azulejos/listado-azulejos.component';
import { SharedModule } from '../shared/shared.module';
import { MandoService } from '../core/mando.service';
import { ListadoOsComponent } from './listado-os/listado-os.component';
import { DialogoActasComponent } from './dialogo-actas/dialogo-actas.component';
import { NavegacionModule } from '../navegacion/navegacion.module';



@NgModule({
  declarations: [
    MandoComponent,
    ListadoAzulejosComponent,
    ListadoOsComponent,
    DialogoActasComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MandoComponent,
    ListadoAzulejosComponent,
    ListadoOsComponent
  ],
  providers: [MandoService]
})
export class MandoModule { }
