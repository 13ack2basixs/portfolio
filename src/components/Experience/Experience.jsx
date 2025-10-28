import ExperienceCard from './ExperienceCard';
import './Experience.css';

import bfe from '../../assets/experiences/bfe.png';
import webot from '../../assets/experiences/webot.svg';
import spgroup from '../../assets/experiences/spgroup.png'

const experienceItems = [
    {
        imgSrc: spgroup,
        imgAlt: 'spgroup',
        role: "Full Stack Developer",
        dates: "Dec 2025 - Present",
        company: "SP Group",
    },
    {
        imgSrc: webot,
        imgAlt: 'webot',
        role: "Software Developer",
        dates: "Jun 2025 - Nov 2025",
        company: "Webot Singapore",
    },
    {
        imgSrc: bfe,
        imgAlt: 'bfe',
        role: "Frontend Developer",
        dates: "Feb 2025 - Aug 2025",
        company: "Bridges for Enterprise",
    },
    
];

// Iterate over experienceItems and create an ExperienceCard
const Experience = () => {
    return (
        <div className='experience-container'>
            <h2 id='experience'>Experiences</h2>

            {experienceItems.map(exp => (
                <ExperienceCard 
                    key={exp.role}
                    imgSrc={exp.imgSrc}
                    imgAlt={exp.imgAlt}
                    role={exp.role}
                    dates={exp.dates}
                    company={exp.company}
                />
            ))}
        </div>
    )
}

export default Experience;

