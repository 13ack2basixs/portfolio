import ExperienceCard from './ExperienceCard';
import './Experience.css';

import reactSVG from '../../assets/frameworks/react.svg';
import djangoSVG from '../../assets/frameworks/django.svg';
import javascriptSVG from '../../assets/languages/javascript.svg';
import htmlSVG from '../../assets/languages/html.svg';
import cssSVG from '../../assets/languages/css.svg';
import gitSVG from '../../assets/tools/git.svg';

const experienceItems = [
    {
        role: "Frontend Developer",
        dates: "Feb 2025 - Present",
        company: "Bridges for Enterprise",
        description: "We build apps for early stage social entrepreneurs",
        bullets: [
            "Developed frontend components with React Native to improve user's interactivity",
            "Collaborated with frontend and backend developers to integrate the project"
        ],
        techLogos: [reactSVG, djangoSVG, javascriptSVG, htmlSVG, cssSVG, gitSVG],
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
                    role={exp.role}
                    dates={exp.dates}
                    company={exp.company}
                    bullets={exp.bullets}
                    techLogos={exp.techLogos}
                />
            ))}
        </div>
    )
}

export default Experience;

