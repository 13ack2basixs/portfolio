import ExperienceCard from './ExperienceCard';
import './Experience.css';

import bfe from '../../assets/experiences/bfe.png';
import webot from '../../assets/experiences/webot.svg';


const experienceItems = [
    {
        imgSrc: bfe,
        imgAlt: 'bfe',
        role: "Frontend Developer",
        dates: "Feb 2025 - Present",
        company: "Bridges for Enterprise",
        bullets: [
            "Developed frontend components with React Native to improve user's interactivity",
            "Collaborated with frontend and backend developers to integrate the project"
        ],
    },
    {
        imgSrc: webot,
        imgAlt: 'webot',
        role: "Software Developer",
        dates: "Jun 2025 - Present",
        company: "Webot Singapore",
        bullets: [
            
        ],
    },
    
]

// Iterate over experienceItems and create an ExperienceCard
const Experience = () => {
    return (
        <div className='experience-container'>
            <h2 id='experience'>Experience</h2>

            {experienceItems.map(exp => (
                <ExperienceCard 
                    key={exp.role}
                    imgSrc={exp.imgSrc}
                    imgAlt={exp.imgAlt}
                    role={exp.role}
                    dates={exp.dates}
                    company={exp.company}
                    bullets={exp.bullets}
                />
            ))}
        </div>
    )
}

export default Experience;

