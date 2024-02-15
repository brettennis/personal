import icon_arrow from '../assets/icon-arrow.svg';
import '../styles/Components.css';

export default function Project({ project }) {
    const { name, url, description, techStack } = project;

    const displayTech = (tech, index) => {
        let border = '';
        if (index !== 0) border = ' | ';
        return (border + tech);
    }

    return (
        <div className='project'>
            <a target="_blank" rel="noopener noreferrer"
                href={url}
            >
                {name}
                
                <img className='arrow' src={icon_arrow} alt='Arrow'/>
            </a>

            <p> {description} </p>

            <p className='tech-stack'>
                {techStack.map(displayTech)}
            </p>
        </div>
    )
}