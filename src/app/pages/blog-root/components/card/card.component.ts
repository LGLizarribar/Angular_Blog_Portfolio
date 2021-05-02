import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public title: string | undefined = undefined;
  @Input() public author: string | undefined = undefined;
  @Input() public description: string | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
