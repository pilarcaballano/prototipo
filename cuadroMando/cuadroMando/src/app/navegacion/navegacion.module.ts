import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MandoComponent } from '../mando2/mando/mando.component';
import { DetalleOrdenServicioComponent } from '../accionInspectora/orden-servicio/detalle-orden-servicio/detalle-orden-servicio.component';
import { PaginaNoEncontradaComponent } from '../pagina-no-encontrada/pagina-no-encontrada.component';
import { DetalleActasComponent } from '../accionInspectora/actas/detalle-actas/detalle-actas.component';
import { ConsultaOrdenServicioComponent } from '../accionInspectora/orden-servicio/consulta-orden-servicio/consulta-orden-servicio.component';
import { ComCorreoComponent } from '../com-correo/com-correo.component';

const routes: Routes = [
  { path: "home", component: MandoComponent },
  { path: "consultaOS",  component: ConsultaOrdenServicioComponent },
  { path: "detalleOrden",  component: DetalleOrdenServicioComponent },
  { path: "detalleOrden/:id",  component: DetalleOrdenServicioComponent },
  { path: "detalleActas",  component: DetalleActasComponent },
  { path: "detalleActas/:id",  component: DetalleActasComponent },
  { path: "comcorreo", component:  ComCorreoComponent},

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "pagina-no-encontrada", component: PaginaNoEncontradaComponent },
  { path: "**", redirectTo: "/pagina-no-encontrada" }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ],
})
export class NavegacionModule { }
