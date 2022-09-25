import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private title:Title) {
    title.setTitle("Vi-ain | Blog | Desarrollo Blockchain");
    }

  ngOnInit(): void {
  }

}
