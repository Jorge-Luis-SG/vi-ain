import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() btn1: string ="Development";
  @Input() btn2: string ="Backend";
  @Input() btn3: string ="Go";
  @Input() btn4: string ="";

}
