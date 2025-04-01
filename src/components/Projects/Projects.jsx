import ProjectCard from './ProjectCard';
import './Projects.css';
import inprogress from '../../assets/misc/inprogress.svg';
import fintrack from '../../assets/previews/fintrack.png';

import gitSVG from '../../assets/tools/git.svg';
import vuejsSVG from '../../assets/frameworks/vuejs.svg';
// import firebaseSVG from '../../assets/tools/firebase.svg';
import javascriptSVG from '../../assets/languages/javascript.svg';
import htmlSVG from '../../assets/languages/html.svg';
import cssSVG from '../../assets/languages/css.svg';
import pythonSVG from '../../assets/languages/python.svg';
import streamlitSVG from '../../assets/frameworks/streamlit.svg';
import pandasSVG from '../../assets/libraries/pandas.svg';
import chartjsSVG from '../../assets/libraries/chartjs.svg';
import dockerSVG from '../../assets/tools/docker.svg';
import awsSVG from '../../assets/tools/aws.svg';
import djangoSVG from '../../assets/frameworks/django.svg';
import postgresqlSVG from '../../assets/languages/postgresql.svg';
import nodejsSVG from '../../assets/frameworks/nodejs.svg';
import reactSVG from '../../assets/frameworks/react.svg';


const projectItems = [
    {
        title: "what2watch",
        description: "This is some fake description for me to adjust the styling later. This is a spam so I can see how it wraps around the div. I think it works fine, looks good to me!",
        demolink: "#",
        codeLink: "#",
        techLogos: [vuejsSVG, javascriptSVG, htmlSVG, cssSVG, gitSVG],
        image: inprogress,
    },
    {
        title: "AI CSV/Excel Analyser",
        description: "This is some fake description for me to adjust the styling later. This is a spam so I can see how it wraps around the div. I think it works fine, looks good to me!",
        demolink: "",
        codeLink: "",
        techLogos: [pythonSVG, streamlitSVG, pandasSVG, gitSVG],
        image: inprogress,
    },
    {
        title: "Fintrack",
        description: "This is some fake description for me to adjust the styling later. This is a spam so I can see how it wraps around the div. I think it works fine, looks good to me!",
        demolink: "",
        codeLink: "",
        techLogos: [pythonSVG, djangoSVG, javascriptSVG, htmlSVG, cssSVG, dockerSVG, postgresqlSVG,awsSVG, chartjsSVG, gitSVG],
        image: fintrack,
    },
    {
        title: "BetaTrade",
        description: "This is some fake description for me to adjust the styling later. This is a spam so I can see how it wraps around the div. I think it works fine, looks good to me!",
        demolink: "#",
        codeLink: "",
        techLogos: [javascriptSVG, nodejsSVG, reactSVG, htmlSVG, cssSVG, chartjsSVG, gitSVG],
        image: inprogress,
    },
    
]

// Iterate over projectsData and create a ProjectCard
const Projects = () => {
    return (
        <div className='projects-container'>
            <h2 id='projects'>Projects</h2>

            {projectItems.map(proj => (
                <ProjectCard 
                    key={proj.title} 
                    title={proj.title}
                    description={proj.description}
                    demolink={proj.demolink}
                    codeLink={proj.codeLink}
                    techLogos={proj.techLogos}
                    image={proj.image}
                />
            ))}
        </div>
    )
}

export default Projects;

