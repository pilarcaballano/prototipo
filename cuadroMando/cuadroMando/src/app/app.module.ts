import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MandoModule } from './mando/mando.module';
import { CoreModule } from './core/core.module';
import { NavegacionModule } from './navegacion/navegacion.module';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { Mando2Module } from './mando2/mando2.module';
import { OrdenServicioModule } from './accionInspectora/orden-servicio/orden-servicio.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ComCorreoModule } from './com-correo/com-correo.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontradaComponent,
    ToolbarComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule, 
    SharedModule,
    MandoModule,
    Mando2Module,
    NavegacionModule,
    OrdenServicioModule,
    ComCorreoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
