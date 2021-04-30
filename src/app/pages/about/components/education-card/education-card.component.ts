import { Component, Input, OnInit } from '@angular/core';
import { Study } from '../../models/about';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {
  @Input() education!: Study[];

  constructor() { }

  ngOnInit(): void {
  }

}
