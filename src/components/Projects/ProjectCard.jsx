import './ProjectCard.css';



const ProjectCard = ({ title, description, demolink, codeLink, techLogos, image }) => {
    console.log('image path:', image);
    const isSvg = image.startsWith('data:image/svg+xml');
    const imageClass = isSvg ? 'svg-image' : 'other-image'
    return (
        <div className="project-card-container">
        <div className="project-container">
            <h3 id='project-title'>{title}</h3>
            <p>{description}</p>

            <p><a href={demolink} target="_blank"><strong>Try it here!</strong></a></p>
            <p><a href={codeLink} target="_blank"><strong>View the code here!</strong></a></p>
            <div className="tech-logos">
                {/* iterate through the array of icons */}
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
