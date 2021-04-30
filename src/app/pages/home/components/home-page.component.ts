import {Home, Intro} from '../models/home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public home: Home;
  public intro: Intro;

  constructor() {
    this.intro = {
      welcomeMessage: 'Welcome to my Portfolio!',
      myName: 'Laura García Lizarribar',
      title: 'Full Stack Web Developer',
      skills: [
        'HTML',
        'SCSS',
        'VanillaJS',
        'PHP',
        'Symfony',
        'Node',
        'TypeScript',
        'Node',
        'Angular',
        'React',
        'MySQL',
        'MongoDB'
      ]
    };
    this.home = {
      intro: this.intro
    };
  }

  ngOnInit(): void {
  }

}
