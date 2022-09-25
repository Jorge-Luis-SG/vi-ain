import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper from 'swiper';


import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    var swiper = new Swiper(".swiperRedes-services", {
      slidesPerView: 3,
      loop: true,
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

