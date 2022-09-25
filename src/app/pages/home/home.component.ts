import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title) {
    title.setTitle("Vi-ain | Inicio | Desarrollo Blockchain | We Create The Future");
    }

  ngOnInit(): void {
  }
  link(param:string=""){
    window.location.href = 'https://vi-ain.com/'+param;
  }

}
