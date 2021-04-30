export interface Projects {
    title: string;
    description: string;
    singleProject: Array<Project>;
}

export interface Project {
    projectTitle: string;
    projectImg: Image;
    projectDesc: string;
    projectLink: Link;
    herokuLink: Link;
}

export interface Image {
    img: string;
    imgDesc: string;
}

export interface Link {
    linkDesc: string;
    linkUrl: string;
}