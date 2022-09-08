import { contact } from '/src/data.js'
import Button from '/src/components/elements/Button'
import SocialLinks from '/src/components/elements/SocialLinks'
import '/src/stylesheets/sections/Contact.css'

const Contact = () => {
	const { description, email } = contact

	return (
		<section className='Contact section' id='contact'>
			<div className='container'>
				<h2 className='Contact-h2 section-head'>Contact.</h2>
				<div className='container-sm'>
					<h3 className='Contact-h3'>
						<a href={`mailto:${email}`}>Get in touch!</a>
					</h3>
					<p className='Contact-description'>{description}</p>
					<div className='Contact-button'>
						<Button text='Send email' link={email} />
					</div>
					<div className='Contact-social'>
						<SocialLinks />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
