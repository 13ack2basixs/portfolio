import './Socials.css'
import SocialIcon from './SocialIcon';
import githubSVG from '../../assets/socials/github.svg';
import linkedinSVG from '../../assets/socials/linkedin.svg';

const socialIcons = [
    {
        name: "Github",
        link: "https://github.com/13ack2basixs",
        svg: githubSVG
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/hongwei13",
        svg: linkedinSVG
    }
]

const Socials = () => {
    return (
        <div className='socials-container'>
            {socialIcons.map((icon) => (
                <SocialIcon 
                    key={icon.name}
                    link={icon.link}
                    svg={icon.svg}
                />
            ))}
        </div>
    )
}

export default Socials;