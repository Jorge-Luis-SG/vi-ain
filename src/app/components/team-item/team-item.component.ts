import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent{

  constructor() { }


  @Input() inlink: string="";
  @Input() in: string="";
  @Input() namel: string="";
  @Input() name: string="";
  @Input()name2: string="";
  @Input()rank: string="";



}
