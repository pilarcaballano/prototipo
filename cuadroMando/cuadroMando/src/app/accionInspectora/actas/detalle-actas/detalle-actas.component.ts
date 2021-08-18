import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cuadro-detalle-actas',
  templateUrl: './detalle-actas.component.html',
  styleUrls: ['./detalle-actas.component.scss']
})
export class DetalleActasComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("Detalle Actas");
  }

  ngOnInit(): void {
  }

}
