import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper from 'swiper';


import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RedesSocialesComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    var swiper = new Swiper(".swiperRedes", {
      slidesPerView: 3,
      loop: true,
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {

  }

}
