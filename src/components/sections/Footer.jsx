import '/src/stylesheets/sections/Footer.css'
import { brand } from '/src/data.js'

const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='container'>
				<p className='Footer-brand'>
					{brand} <span>© 2022</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
