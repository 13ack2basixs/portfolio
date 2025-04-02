import ProjectCard from './ProjectCard';
import './Projects.css';
import inprogress from '../../assets/misc/inprogress.svg';
import fintrack from '../../assets/previews/fintrack.png';

import gitSVG from '../../assets/tools/git.svg';
import vuejsSVG from '../../assets/frameworks/vuejs.svg';
import firebaseSVG from '../../assets/tools/firebase.svg';
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
import mongodbSVG from '../../assets/tools/mongodb.svg';


const projectItems = [
    {
        title: "what2watch",
        description: "Movie recommendation platform that consolidates content from mulitple streaming sites and provides personalised movie recommendations. With the overload of streaming options, what2watch helps users make informed decisions and discover hidden gems.",
        techLogos: [vuejsSVG, javascriptSVG, htmlSVG, cssSVG, firebaseSVG, gitSVG],
        image: inprogress,
    },
    {
        title: "AI CSV/Excel Analyser",
        description: "Allow users to upload CSV/Excel files and interact with an AI to analyze data. Users can prompt the AI for insights, making data exploration simple and efficient. This is created to practise using LLM APIs with pandas",
        demolink: "https://aifilereader.streamlit.app/",
        techLogos: [pythonSVG, streamlitSVG, pandasSVG, gitSVG],
        image: inprogress,
    },
    {
        title: "Fintrack",
        description: "An expense tracker that helps users manage their finances in one place, simplifying budgeting and financial tracking. It reduces the need for multiple apps, giving users a streamlined way to track and manage their assets and expenses.",
        demolink: "http://54.179.109.136:8000/",
        techLogos: [pythonSVG, djangoSVG, javascriptSVG, htmlSVG, cssSVG, dockerSVG, postgresqlSVG,awsSVG, chartjsSVG, gitSVG],
        image: fintrack,
    },
    {
        title: "BetaTrade",
        description: "BetaTrade is a paper trading app that allows users to practice trading and investing in a risk-free environment with real-time market data. Many students fear losing money when learning to invest, thus I wanted to create an app that helps users build confidence in investing without any financial risk.",
        techLogos: [javascriptSVG, nodejsSVG, reactSVG, htmlSVG, cssSVG, mongodbSVG, chartjsSVG, gitSVG],
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

