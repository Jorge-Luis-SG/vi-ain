import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent   {

  constructor() { }
  menu(){
    document.getElementById('header')?.classList.toggle("menu-active")
  }

}
