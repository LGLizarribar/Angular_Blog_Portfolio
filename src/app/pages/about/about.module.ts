import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from './../../shared/shared.module';

import {AboutComponent} from './components/about.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { EducationCardComponent } from './components/education-card/education-card.component';

@NgModule({
  declarations: [AboutComponent, ExperienceCardComponent, EducationCardComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
