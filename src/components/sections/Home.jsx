import '/src/stylesheets/sections/Home.css'
import SocialLinks from '/src/components/elements/SocialLinks'
import { profile } from '/src/data.js'

const Home = () => {
	const { name, role, description } = profile

	return (
		<section className='Home section' id='home'>
			<div className='container'>
				<div className='Home-caption'>
					<span className='Home-hi'>Hi I'm</span>
					<h1 className='Home-h1'>{name}</h1>
					<h2 className='Home-h2'>{role}</h2>
					<p className='Home-description'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
						facere, itaque excepturi, necessitatibus cum ex nisi.
					</p>
					<SocialLinks />
				</div>
			</div>
		</section>
	)
}

export default Home
