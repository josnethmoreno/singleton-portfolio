import Button from '@/components/elements/Button'
import SocialLinks from '@/components/elements/SocialLinks'
import '@/stylesheets/sections/Contact.css'

const Contact = () => {
	return(
		<section className="Contact section" id="contact">
			<div className="container">
				<h2 className="Contact-h2 section-head"><span>02</span> Contact</h2>
				<div className="container-sm">
					<h3 className="Contact-h3">
						Get in touch!
					</h3>
					<p className="Contact-description">
						Tenetur laudantium? Aliquid ipsum perferendis blanditiis non. Adipisci eos numquam reiciendis, rerum, quo similique reprehenderit. Adipisci eos numquam reiciendis
					</p>
					<div className="Contact-button">
						<Button text="Send email"/>
					</div>
					<div className="Contact-social">
						<SocialLinks />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact