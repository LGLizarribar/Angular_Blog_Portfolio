import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from './../../shared/shared.module';

import {ProjectsComponent} from './components/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
})
export class ProjectsModule {}
