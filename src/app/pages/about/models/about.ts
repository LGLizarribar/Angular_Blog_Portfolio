export interface About {
    title: string;
    description: string;
    experience: Array<Job>;
    education: Array<Study>;
};

export interface Job {
    title: string;
    company: string;
    desc: string;
    period: string;
};

export interface Study {
    title: string;
    school: string;
    desc: string;
}