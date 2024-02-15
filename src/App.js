import icon_email from './assets/icon-email.svg';
import icon_github from './assets/icon-github.svg';
import icon_linkedin from './assets/icon-linkedin.png';
import Project from './components/Project';
import './styles/App.css';

export default function App() {

	const projects = [
		{
			name: 'BagelCam',
			url: 'https://bagelcam.vercel.app',
			description: 'Webcam photobooth with real-time controls and easily shareable user presets',
			techStack: ['Svelte', 'Figma', 'OpenCV'],
			preview: ''
		},
		{
			name: 'Glassy',
			url: 'https://glassy.vercel.app',
			description: 'Weather app for forecasting surf conditions',
			techStack: ['React.js', 'Figma', 'Stormglass.io'],
			preview: ''
		},
	]

  	return (
    	<div className='App'>
			<div className='container'>
				<main>
				<span className='title-small'>
					<br/><br/>
					Hey, I'm <br/>
					<span className='title-large'>Brett Ennis.</span>
				</span>

				<div className='about'>
					<p>
						I'm a new grad with experience
						in full-stack technologies looking for a career 
						in software development. You can check out my projects here.
					</p>
				</div>

				<ul className='projects'>
					{projects.map((project) => {
						return (
							<li>
								<Project project={project} />
							</li>
						)
					})}
				</ul>

				<div className='link-container'>
					<ul className='labels'>
						<li>Email</li>
						<li>GitHub</li>
						<li>LinkedIn</li>
					</ul>
					<ul className='links'>
						<li><a 
							target="_blank" rel="noopener noreferrer"
							href='mailto:brettennis4@gmail.com'>
							brettennis4@gmail.com
						</a></li>
						<li><a 
							target="_blank" rel="noopener noreferrer"
							href='https://github.com/brettennis'>
							brettennis
						</a></li>
						<li><a 
							target="_blank" rel="noopener noreferrer"
							href='https://linkedin.com/in/brettennis'>
							in/brettennis
						</a></li>
					</ul>
				</div>

				</main>
			</div>

			<ul className='logos'>
				<li><a 
					target="_blank" rel="noopener noreferrer"
					href='mailto:brettennis4@gmail.com'>
					<img className='logo' src={icon_email} alt='Email'></img>
				</a></li>
				<li><a 
					target="_blank" rel="noopener noreferrer"
					href='https://github.com/brettennis'>
					<img className='logo' src={icon_github} alt='GitHub'></img>
				</a></li>
				<li><a 
					target="_blank" rel="noopener noreferrer"
					href='https://linkedin.com/in/brettennis'>
					<img className='logo' src={icon_linkedin} alt='LinkedIn'></img>
				</a></li>
			</ul>

    	</div>
  	);
}
