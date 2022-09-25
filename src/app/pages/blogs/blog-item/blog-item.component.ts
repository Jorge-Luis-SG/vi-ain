import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() img: string ="";
  @Input() alt: string ="";
  @Input() btn1: string ="";
  @Input() btn2: string ="";
  @Input() btn3: string ="";
  @Input() btn4: string ="";

  @Input() title: string ="";
  @Input() desc: string ="";
  @Input() date: string ="";

}
