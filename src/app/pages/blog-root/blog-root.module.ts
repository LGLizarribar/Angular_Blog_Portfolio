import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRootRoutingModule } from './blog-root-routing.module';
import { BlogRootComponent } from './components/blog-root.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations:[BlogRootComponent, CardComponent],
  imports: [CommonModule, BlogRootRoutingModule],
})
export class BlogRootModule {}
