import './ProjectCard.css';

const ProjectCard = ({ title, description, demolink, techLogos, image }) => {
    const isSvg = image.startsWith('data:image/svg+xml');
    const imageClass = isSvg ? 'svg-image' : 'other-image'
    return (
        <div className="project-card-container">
        <div className="project-container">
            <h3 id='project-title'>{title}</h3>
            <p>{description}</p>
            {/* Render demoLink conditionally (if there is a link given) */}
            {demolink && (
                    <p><a href={demolink} target="_blank"><strong>Try it here!</strong></a></p>
                )}
            <div className="project-tech-logos">
                {/* Iterate through the array of icons */}
                {techLogos.map((icon, index) => (
                <img src={icon} key={index} alt="tech" />
            ))}
            </div>
        </div>
        <div className="project-image">
            {/* Dynamically set image class based on extension type */}
            <img src={image} alt={`${title} preview`} className={imageClass} />
        </div>
        </div>
    );
};

export default ProjectCard;
