import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cuadro-dato-resultado',
  templateUrl: './dato-resultado.component.html',
  styleUrls: ['./dato-resultado.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatoResultadoComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
