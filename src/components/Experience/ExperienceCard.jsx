import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ role, dates, company, bullets, techLogos }) => {
    return (
        <div className="experience-card-container">            
            <div className="experience-item">
                <div className="experience-header">
                    <h3 className="experience-role">{role}</h3>
                    <span className="experience-dates">{dates}</span>
                    <span className="experience-company">{company}</span>
                </div>
                <ul className="experience-bullets">
                    {bullets.map((list, index) => (
                        <li key={index}>- {list}</li>
                    ))}
                </ul>
                <div className="experience-tech-logos">
                    {techLogos.map((icon, index) => (
                        <img src={icon} key={index} alt="tech" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
