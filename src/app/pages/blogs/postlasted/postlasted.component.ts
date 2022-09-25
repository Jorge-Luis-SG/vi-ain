import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlasted',
  templateUrl: './postlasted.component.html',
  styleUrls: ['./postlasted.component.scss']
})
export class PostlastedComponent implements OnInit {

  constructor() { }
  @Input() img: string ="";
  @Input() alt: string ="";
  @Input() bg: string ="";
  @Input() btn1: string ="";
  @Input() btn2: string ="";
  @Input() btn3: string ="";
  @Input() btn4: string ="";

  @Input() title: string ="";
  @Input() desc: string ="";
  @Input() date: string ="";




  ngOnInit(): void {
  }

}
