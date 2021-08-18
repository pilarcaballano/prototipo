import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cuadro-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.scss']
})
export class PaginaNoEncontradaComponent implements OnInit {

  public gif: string;

  constructor(private titleService: Title) {
    titleService.setTitle("Página no encontrada.");
  }

  ngOnInit(): void {

    switch (Math.floor(Math.random() * 3)) {
      case 0:
        this.gif = "../../assets/img/nothing.gif";
        break;
      case 1:
        this.gif = "../../assets/img/missing.gif";
        break;
      case 2:
        this.gif = "../../assets/img/fine.gif";
        break;
    }
  }

}
