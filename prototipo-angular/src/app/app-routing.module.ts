import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CuadroMandoComponent } from "./cuadro-mando/cuadro-mando.component";


const routes: Routes = [
  { path: "mail", component: HomePageComponent },
  { path: "cuadro-mando", component: CuadroMandoComponent },

  { path: "", redirectTo: "/mail", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}