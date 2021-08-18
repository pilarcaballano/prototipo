import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActuantesComponent } from './actuantes.component';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ControlActuanteComponent } from './control-actuante/control-actuante.component';



@NgModule({
  declarations: [ActuantesComponent, ControlActuanteComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ControlActuanteComponent
  ],
  providers: [UsuariosService]
})
export class ActuantesModule { }
