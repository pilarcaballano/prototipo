import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Azulejo } from './azulejo';

@Component({
  selector: 'cuadro-azulejo',
  templateUrl: './azulejo.component.html',
  styleUrls: ['./azulejo.component.scss']
})
export class AzulejoComponent implements OnInit {

  private azulejo: Azulejo;
  
  @Input() set class(c: string) {this.azulejo.class = c};
  get class(): string {return this.azulejo.class}

  @Input() set title(t: string) {this.azulejo.title = t};
  get title(): string {return this.azulejo.title}

  @Input() set total(t: string | number) {this.azulejo.total = t};
  get total(): string | number {return this.azulejo.total}

  @Input() set centered(c: boolean) {this.azulejo.centered = c}
  get centered():boolean {return this.azulejo.centered}

  @Input() set disabled(d: boolean) {this.azulejo.disabled = d}
  get disabled():boolean {return this.azulejo.disabled}

  @Input() set unbounded(u: boolean) {this.azulejo.unbounded = u}
  get unbounded():boolean {return this.azulejo.unbounded}

  @Input() set radius(r: number) {this.azulejo.radius = r}
  get radius():number {return this.azulejo.radius}

  @Input() set color(c:string) {this.azulejo.color = c}
  get color():string {return this.azulejo.color}


  constructor() {
    //this.azulejo = new Azulejo();
    this.azulejo = {} as Azulejo;
  }

  ngOnInit(): void {
  }

}
