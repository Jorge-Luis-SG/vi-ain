import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portolio-item',
  templateUrl: './portolio-item.component.html',
  styleUrls: ['./portolio-item.component.scss']
})
export class PortolioItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mest:string = "mest";
  mestp:string = "Te presentamos el futuro de las plataformas de Streaming y producciones audiovisuales, MEST es un proyecto donde podrás ser usuario o creador, y de ambas formas beneficiarte.";

  nftix:string = "nftix";
  nftixp:string = "NFTIX es la revolución del entretenimiento aplicando la tecnología WEB 3.0. Una plataforma que  transforma el mundo de los eventos a través de la boletería, permitiendo que las entradas sean seguras, unicas y controladas.";

  panda:string = "pandarian";
  pandap:string = "Somos una comunidad NFT creada con el propósito de retribuir a nuestro mundo a través de proyectos ambientales de reforestación y conservación ambiental. Además, traemos a nuestro sistema de participación comunitaria y mercado de comercialización.";

  disrup:string = "disruptive-land";
  disrupp:string = "Una comunidad de inversión a través de un box de tokenización de proyectos de industria que llega al espacio cripto para impulsar y realizar  proyectos disruptivos que  respeten el medio ambiente, generen empleo de calidad y desarrollo social en las áreas donde se lleven a cabo.";

  project: string = this.mest;
  desc: string = this.mestp;
  url: string= "#";

  proyect(title:string, title2:string, url:string ){
    this.project=title;
    this.desc= title2;
    this.url = url;
  }
}
