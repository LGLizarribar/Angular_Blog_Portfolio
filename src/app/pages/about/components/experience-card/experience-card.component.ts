import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/about';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience!: Job[];

  constructor() { }

  ngOnInit(): void {
  }

}
