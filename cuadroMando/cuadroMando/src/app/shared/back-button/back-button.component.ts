import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/navigation.service';

@Component({
  selector: 'cuadro-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  @Input() public text: string = "Volver";
  @Input() public icon: string = "arrow_back_ios_new"
  @Input() public color: string;

  @Input() public type: string = "icon";

  @Input() public disabled: boolean = false;

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.type = this.type.toLocaleLowerCase();

    //Comprobamos los tipos, y asignamos icon en caso de que sea un tipo incorrecto
    if(!(this.type === "basic" || this.type === "flat" || this.type === "raised" || this.type === "stroked")){
      this.type = "icon";
    }
  }

  /**
   * Metodo encargado de navegar a la página anterior
   */
  public back(e):void{
    e.preventDefault();

    if(!this.disabled){
      this.navigation.back();
    }
  }

}
