import { Component, OnInit } from '@angular/core';
import { Image, Link, Project, Projects } from '../models/projects';

import '../../../../assets/images/php-symfony-logo.png'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Projects;
  public singleProject: Project[];

  constructor() {
    this.singleProject = [
      {
        projectTitle: 'Maleteo Project',
        projectImg: {
          img: '../../../../assets/images/php-symfony-logo.png',
          imgDesc: 'PHP and Symfony',
        },
        projectDesc: 'Project developed with PHP and Symfony, connected to a MySql database. It includes dinamic element rendering on twig, authentication, roles and CRUD options.',
        projectLink: {
          linkDesc: 'Check my code on gitlab',
          linkUrl: 'https://gitlab.com/LGLizarribar/proyecto_final_php_laura_garcia',
        },
        herokuLink: {
          linkDesc: '',
          linkUrl: '',
        }
      },
      {
        projectTitle: 'Node Jobsite Project',
        projectImg: {
          img: '../../../../assets/images/node-logo.png',
          imgDesc: 'Node',
        },
        projectDesc: 'Project developed fully on Node.js for a jobsite webpage, where the user can navigate through job offers or create his own. It includes views through hbs, a complete CRUD, routing, authentication, connection to mongoDB and cloudinary, and it\'s deployed on Heroku',
        projectLink: {
          linkDesc: 'Check my code on gitlab',
          linkUrl: 'https://gitlab.com/LGLizarribar/node_jobsite_project',
        },
        herokuLink: {
          linkDesc: 'Check it online',
          linkUrl: 'https://job-finder-2.herokuapp.com',
        }
      },
      {
        projectTitle: 'Node Jobsite Project',
        projectImg: {
          img: '../../../../assets/images/node-logo.png',
          imgDesc: 'Node',
        },
        projectDesc: 'Project developed fully on Node.js for an e-commerce, where the user can sell and buy products. It includes views through hbs, a complete CRUD, routing, authentication, connection to mongoDB and cloudinary, and it\'s deployed on Heroku. For this project I implemented MVC architecture',
        projectLink: {
          linkDesc: 'Check my code on gitlab',
          linkUrl: 'https://gitlab.com/LGLizarribar/circular_e-commerce_project_node',
        },
        herokuLink: {
          linkDesc: 'Check it online',
          linkUrl: 'https://circular-ecommerce.herokuapp.com',
        }
      },
      {
        projectTitle: 'React Todoist Project',
        projectImg: {
          img: '../../../../assets/images/react-logo.png',
          imgDesc: 'React',
        },
        projectDesc: 'Replica of the Todoist App developed with React where the user can add todos and mark them as complete, and search for todos',
        projectLink: {
          linkDesc: 'Check my code on gitlab',
          linkUrl: 'https://gitlab.com/LGLizarribar/react_todoist_project',
        },
        herokuLink: {
          linkDesc: '',
          linkUrl: '',
        }
      },
      {
        projectTitle: 'Angular Portfolio Project',
        projectImg: {
          img: '../../../../assets/images/angular-logo.png',
          imgDesc: 'Angular',
        },
        projectDesc: 'This portfolio was created with Angular and Typescript. Would you like to check it behind the scenes?',
        projectLink: {
          linkDesc: 'Check my code on gitlab',
          linkUrl: 'https://gitlab.com/LGLizarribar/angular_portfolio',
        },
        herokuLink: {
          linkDesc: '',
          linkUrl: '',
        }
      },
    ];

    this.projects = {
      title: 'Projects',
      description: 'These are some of my projects with different technologies and languages',
      singleProject: this.singleProject,
    };
  }
  
  ngOnInit(): void {
  }

}
