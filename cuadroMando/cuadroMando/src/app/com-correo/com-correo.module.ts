import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// import { ComCorreoService } from '../core/mando.service';
import { NavegacionModule } from '../navegacion/navegacion.module';
import { ComCorreoComponent } from './com-correo.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AgGridModule } from 'ag-grid-angular';
import { SolicitudesPdtsComponent } from './solicitudes-pdts/solicitudes-pdts.component';
import { ComunicacioncorreoService } from '../core/com-correo/comunicacioncorreo.service';



@NgModule({
  declarations: [
    ComCorreoComponent,
    SolicitudesPdtsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
    AgGridModule.withComponents([]),
  ],
  exports: [
    ComCorreoComponent,
    SolicitudesPdtsComponent
  ],
  providers: [ComunicacioncorreoService]
})
export class ComCorreoModule { }
