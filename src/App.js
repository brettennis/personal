import './App.css';
import icon_email from './icon-email.svg';
import icon_github from './icon-github.svg';
import icon_linkedin from './icon-linkedin.png';

function App() {
  	return (
    	<div className='App'>

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

			<div className='container'>
				<main>

				<div className='name'>
					<h1>Brett Ennis</h1>
				</div>

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

				<div className='projects'>
					<h2>Personal Projects</h2>
				</div>

				</main>
			</div>
    	</div>
  	);
}

export default App;
