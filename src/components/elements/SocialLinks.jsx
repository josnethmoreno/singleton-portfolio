import { createElement } from 'react'
import { SiGithub, SiMedium, SiTwitter, SiInstagram } from "react-icons/si";
import '@/stylesheets/elements/SocialLinks.css'
import { social } from '@/data.js'

const SocialLinks = () => {

	const Icon = (props) => {
	  const { icon } = props
	  const TheIcon = icon
	  return <TheIcon {...props} />;
	}

	return(
		<div className="Social-links">
			{social.map(s => 
				<a className="Social-link" href={s.link}>
					<Icon icon={s.icon} />
				</a>
			)}
		</div>
	);
}




export default SocialLinks