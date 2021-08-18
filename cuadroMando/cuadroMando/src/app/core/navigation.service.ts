import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history: string[] = [];


  constructor(
    private router: Router,
    private location: Location) {

    //Nos subscribimos a los eventos de navegacion
    this.router.events.subscribe((e) => {
      //Si el evento es de navegacion cocmpletada, añadimos la URL al historial
      if (e instanceof NavigationEnd) {
        this.history.push(e.urlAfterRedirects);
        console.log(this.history);
      }
    })
  }

  /**
   * Metodo encargado de navegar a la página anterior
   */
  public back():void{
    //Eliminamos del historial la página actual
    this.history.pop();

    //Si hay en nuestro historial un elemento, volvemos a la pagina anterior
    if(this.history.length > 0){
      this.location.back();
    }else{
      //Si no hay historial, volvemos al inicio
      this.router.navigate(["/home"]);
    }
  }
}
