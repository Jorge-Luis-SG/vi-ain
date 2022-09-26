import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-slider-team',
  templateUrl: './item-slider-team.component.html',
  styleUrls: ['./item-slider-team.component.scss']
})
export class ItemSliderTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() rank1: string ="";
  @Input() rank2: string ="";
  @Input() name1: string ="";
  @Input() name2: string ="";
  @Input() desc: string ="";
  @Input() link: string =""

}
