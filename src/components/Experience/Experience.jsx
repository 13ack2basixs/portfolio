import ExperienceCard from './ExperienceCard';
import './Experience.css';

const experienceItems = [
    {
        role: "Frontend Developer",
        dates: "Feb 2025 - Present",
        company: "Bridges for Enterprise",
        bullets: [
            "Developed frontend components with React Native to improve user's interactivity",
            "Collaborated with frontend and backend developers to integrate the project"
        ],
    },
    {
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

