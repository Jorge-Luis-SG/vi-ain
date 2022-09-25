import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';


import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'app-slider-team2',
  templateUrl: './slider-team2.component.html',
  styleUrls: ['./slider-team2.component.scss']
})

export class SliderTeam2Component implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    var swiper = new Swiper(".sliderTeam2", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay:{
        delay:1000
      },
      breakpoints: {
        650: {
          slidesPerView: 2,
        },
        720: {
          slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
          }
      },
    });
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {

  }

}

