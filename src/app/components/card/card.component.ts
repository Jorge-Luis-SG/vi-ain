import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() title1:string ="";
  @Input() title2:string ="";
  @Input() hover:string ="";
  @Input() hover2:string ="";


  constructor() { }



}
