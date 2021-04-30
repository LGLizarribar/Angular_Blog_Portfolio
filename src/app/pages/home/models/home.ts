export interface Home {
    intro: Intro;
}

export interface Intro {
    welcomeMessage: string;
    myName: string;
    title: string;
    skills: Array<string>
}