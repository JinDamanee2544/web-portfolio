interface IPorfolioData {
    title: string;
    img: string;
    description: string;
    technologies: string[];
    github: string;
    live?: string;
}

export const porfolioData : IPorfolioData[] = [
    {
        title: 'Portfolio',
        img: '/Tendon.png',
        description: 'This portfolio is built with React and TypeScript. It is fully responsive and uses CSS Grid and Flexbox for layout. It is hosted on Netlify.',
        technologies: ['React', 'TypeScript', 'CSS Grid', 'Flexbox', 'Netlify'],
        github: '',
    }
]