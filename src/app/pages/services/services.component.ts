import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private title:Title) {
    title.setTitle("Vi-ain | Servicios | Desarrollo Blockchain | We Create The Future");
    }

  ngOnInit(): void {
  }


}
