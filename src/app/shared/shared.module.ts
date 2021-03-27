import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HeaderComponent],
  providers: [],
  exports: [HeaderComponent],
})
export class SharedModule {}
