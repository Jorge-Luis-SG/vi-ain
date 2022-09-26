import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portolio-item',
  templateUrl: './portolio-item.component.html',
  styleUrls: ['./portolio-item.component.scss']
})
export class PortolioItemComponent implements OnInit {


  ngOnInit(): void {
  }
  mest:string = "mest";

  nftix:string = "nftix";

  panda:string = "pandarian";

  disrup:string = "disruptive-land";

  value = localStorage.getItem('value');

  constructor() {

  }

  project: string = this.mest;
  desc: string = 'mest';
  url: string= "#";

  proyect(title:string, title2:string, url:string ){
    this.project=title;
    this.desc= title2;
    this.url = url;
  }
}
