import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'vi-ain';

  data:any;
  constructor(private http: HttpClient){

  
}

}


