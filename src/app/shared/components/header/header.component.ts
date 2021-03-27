import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public active: boolean = false;
  constructor() {}

  public onBurgerClicked(): void {
    this.active = !this.active;
  }
}
