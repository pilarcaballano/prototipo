import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cuadro-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  private _class: string = "";
  @Input() public set class(c: string) {this._class = c};
  public get class(): string {return `container ${this._class}`}

  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public titleRouterLink: any;

  constructor() { }
  ngOnInit(): void {
  }

}
