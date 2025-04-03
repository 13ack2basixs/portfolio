import './SocialIcon.css'

const SocialIcon = ({name, link, svg }) => {
    return (
        <a href={link} target='_blank'>
            <img className='icon' src={svg} alt={name} />
        </a>
    )
}

export default SocialIcon;