import { Intro } from './../../models/home';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.scss']
})
export class ContentHomeComponent implements OnInit {
  @Input() intro!: Intro;

  constructor() { }

  ngOnInit(): void {
  }

}
