import '@/stylesheets/sections/Home.css'
import SocialLinks from '@/components/elements/SocialLinks'

 const Home = () => {
	return(
		<section className="Home section" id="home">
			<div className="container-sm">
				<div className="Home-caption">
					<span className="Home-hi">Hi I'm</span>
					<h1 className="Home-h1">Carlos Montenegro</h1>
					<h2 className="Home-h2">Front End Developer</h2>
					<p className="Home-description">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facere, itaque excepturi, necessitatibus cum ex nisi.
					</p>
					<SocialLinks />
				</div>
			</div>
		</section>
	);
}

export default Home