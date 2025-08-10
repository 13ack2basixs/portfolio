import './ExperienceCard.css';

const ExperienceCard = ({ imgSrc, imgAlt, role, dates, company }) => {
    return (
        <div className="experience-card-container">
            <div className='experience-img-container'>
                <img className="experience-img" src={imgSrc} alt={imgAlt} />
            </div>
            <div className="experience-item"> 
                <h3 className="experience-company">{company}</h3>
                <span className="experience-role">{role}</span> | 
                <span className="experience-dates"> {dates}</span>
            </div>
        </div>
    );
};

export default ExperienceCard;
