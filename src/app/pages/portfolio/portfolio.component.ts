import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent{

  tiempo=0;
  inscribir: any;
  proyect: string = "";
  page: string = "";

  ngOnInit(): void {
    const source = timer(0, 2300);
    this.inscribir = source.subscribe(val => {
      this.tiempo = val;
      if(val==0){
        this.proyect="disruptive-logo2.png";
        this.page="distuptive-land";
      }
      else if(val==1){
        this.proyect="mest.svg";
        this.page="mest";
      }
      else if(val==2){
        this.proyect="nftix.svg";
        this.page="nftix";
      }
      else if(val==3){
        this.proyect="pandarian.svg";
        this.page="pandarian";
      }
      if(val==4){
        this.onDetener();
      }
    });

  }


  onDetener() {
    this.inscribir.unsubscribe();
    const source = timer(0, 2300);
    this.inscribir = source.subscribe(val => {
      this.tiempo = val;
      if(val==0){
        this.proyect="disruptive-logo2.png";
      }
      else if(val==1){
        this.proyect="mest.svg";
      }
      else if(val==2){
        this.proyect="nftix.svg";
      }
      else if(val==3){
        this.proyect="pandarian.svg";
      }
      if(val==4){
        this.onDetener();
      }
    });
  }

  constructor() {

  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

