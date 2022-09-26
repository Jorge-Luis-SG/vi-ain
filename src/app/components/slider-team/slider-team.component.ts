import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider-team',
  templateUrl: './slider-team.component.html',
  styleUrls: ['./slider-team.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SliderTeamComponent implements OnInit, AfterViewInit {

 


  constructor() {}
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiperTeam', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    throw new Error('Method not implemented.');
  }

 ngOnInit(): void {
  //   this.slides$.next(
  //     Array.from({ length: 4 }).map((el, index) => `Slide ${index + 1}`)
  //   );
}

}
