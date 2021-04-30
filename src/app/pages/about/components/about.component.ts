import { About, Job, Study } from './../models/about';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public about: About;
  public experience: Job[];
  public education: Study[];

  constructor() {
    this.experience = [
      {
        title: 'Senior Lawyer',
        company: 'PRA Iberia, S.L.U.',
        desc: 'I manage every kind of procedures needed by the company along with my colleagues in an independent and proactive way.',
        period: '2020 - Nowadays'
      },
      {
        title: 'Senior Lawyer and Assistant Project Manager',
        company: 'Ellipsis Tech Company',
        desc: "As a Corporate Lawyer I managed company's legal affairs and as an Assistant Project Manager I aided the Project Manager to ensure the goog guidance of the proyect in constant communication between the clients and the developers for the development of technological legal tools.",
        period: '2019 - 2020'
      },
      {
        title: 'Junior Lawyer',
        company: 'Various Companies',
        desc: 'Development as a Junior Lawyer in various companies.',
        period: '2015 - 2019'
      },
    ];
    this.education = [
      {
        title: 'Full Stack Web Developer',
        school: 'Upgrade Hub',
        desc: 'Full Stack Web Development part-time bootcamp, where I learned techonologies and frameworks such as HTML, CSS, JS, PHP, Symfony, Angular, Node, React and Agile methodologies.'
      },
      {
        title: 'Executive Master in Corporate Law and Finance',
        school: 'ISDE',
        desc: "Master's Degree where I learned how to manage companies, start-up creations and financial solutions."
      },
      {
        title: "Master's Degree for Spanish Lawyer Bar",
        school: 'UNED',
        desc: "Master's Degree where I learned how to apply my laws knowledge in a practical way."
      },
      {
        title: 'Law Degree',
        school: 'Basque Country University',
        desc: "Law Degree where I acquired most of my conversational and resolutive skills, besides the knowledge linked to laws."
      },
    ];
    this.about = {
      title: "Here's a little more about me",
      description: "Hi! I'm Laura, a former Lawyer that discovered her passion in the development world. If you want to learn something more about my studies and background, check them below!",
      experience: this.experience,
      education: this.education,
    }
   }

  ngOnInit(): void {
  }

}
