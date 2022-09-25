import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-gradient',
  templateUrl: './line-gradient.component.html',
  styleUrls: ['./line-gradient.component.scss']
})
export class LineGradientComponent {

  constructor() { }
  @Input() urlGradient: string ="";
  @Input() lineTitle: string ="";

}
