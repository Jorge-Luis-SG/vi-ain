import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper from 'swiper';


import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider-stacks',
  templateUrl: './slider-stacks.component.html',
  styleUrls: ['./slider-stacks.component.scss']
})

export class SliderStacksComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    var swiper = new Swiper(".stack-slider", {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1150: {
            slidesPerView: 5,
          }
      },
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 100,
      },

    });
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {

  }

}
