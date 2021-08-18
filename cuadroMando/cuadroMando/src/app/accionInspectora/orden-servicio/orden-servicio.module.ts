import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleOrdenServicioComponent } from './detalle-orden-servicio/detalle-orden-servicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdenServicioService } from 'src/app/core/accionInspectora/orden-servicio.service';
import { ActuantesModule } from 'src/app/dialogs/actuantes/actuantes.module';
import { ConfirmModule } from 'src/app/dialogs/confirm/confirm.module';
import { ConsultaOrdenServicioComponent } from './consulta-orden-servicio/consulta-orden-servicio.component';
import { ListadoResultadosModule } from 'src/app/shared/listado-resultados/listado-resultados.module';



@NgModule({
  declarations: [
    DetalleOrdenServicioComponent,
    ConsultaOrdenServicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ActuantesModule,
    ConfirmModule
  ],
  providers: [
    OrdenServicioService
  ]

})
export class OrdenServicioModule { }
