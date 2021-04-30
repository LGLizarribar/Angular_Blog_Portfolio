import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/projects';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() projects!: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
