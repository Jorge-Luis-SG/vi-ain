import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private title:Title) {
    title.setTitle("Vi-ain | Equipo | Desarrollo Blockchain | We Create The Future");
    }

  email(){
    window.location.href = "mailto:support@vi-ain.com";
  }

  ngOnInit(): void {
  }


}
