import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);


import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider-team1',
  templateUrl: './slider-team1.component.html',
  styleUrls: ['./slider-team1.component.scss']
})

export class SliderTeam1Component implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    var swiper = new Swiper(".sliderTeam1", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay:{
        delay:3500
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
