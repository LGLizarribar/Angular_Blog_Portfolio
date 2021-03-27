import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxLottieViewModule } from 'ngx-lottie-view';
import { LottieAnimationViewModule } from 'ng-lottie';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnimationHomeComponent } from './components/animation-home/animation-home.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { HomePageComponent } from './components/home-page.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
};

@NgModule({
  declarations: [
    HomePageComponent,
    AnimationHomeComponent,
    ContentHomeComponent,
    SliderHomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LottieAnimationViewModule.forRoot(),
    NgxLottieViewModule,
    SharedModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
