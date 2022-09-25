import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mint2',
  templateUrl: './mint2.component.html',
  styleUrls: ['./mint2.component.scss']
})
export class Mint2Component implements OnInit {
  valor = 0;
  constructor() { }

  sumar(){
    this.valor++;
    if(this.valor < 0){
      this.valor = 0;
    }
  }
  restar(){
    this.valor--;
    if(this.valor < 0){
      this.valor = 0;
    }
  }
  ngOnInit(): void {
  }


}
