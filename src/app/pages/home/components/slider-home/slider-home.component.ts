import { Component, OnInit, ViewChild } from '@angular/core';

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss'],
})
export class SliderHomeComponent implements OnInit {
  public slides = [
    '../../../../../assets/images/maleteo.png',
    '../../../../../assets/images/maleteo2.png',
    '../../../../../assets/images/catApp.png',
  ];

  public show: boolean = true;
  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: true,
    loop: true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      reverseDirection: false,
      disableOnInteraction: false,
    },
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false,
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent | any;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective | any;

  constructor() {}

  ngOnInit(): void {}

  public toggleType() {
    this.type = this.type === 'component' ? 'directive' : 'component';
  }

  public toggleDisabled() {
    this.disabled = !this.disabled;
  }

  public toggleDirection() {
    this.config.direction =
      this.config.direction === 'horizontal' ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView() {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls() {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive') {
      this.directiveRef.setIndex(0);
    } else {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public toggleKeyboardControl() {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl() {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }

  public autoplay() {}
}
