import React from 'react';
import './Experience.css';

const Experience = ({ role, dates, company, description, bullets, techLogos }) => {
    return (
        <div className="experience-card-container">            
            <div className="experience-card-item">
                <div className="experience-card-header">
                    <h3 className="experience-card-role">{role}</h3>
                    <span className="experience-card-dates">{dates}</span>
                    <span className="experience-card-company">{company}</span>
                </div>
                <p className="experience-card-description">{description}</p>
                <ul className="experience-card-bullets">
                    {bullets.map((list, index) => (
                        <li key={index}>{list}</li>
                    ))}
                </ul>
                <div className="experience-card-tech-logos">
                    {techLogos.map((icon, index) => (
                        <img src={icon} key={index} alt="tech" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
