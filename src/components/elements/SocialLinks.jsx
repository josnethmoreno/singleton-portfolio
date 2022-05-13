import { SiGithub, SiMedium, SiTwitter, SiInstagram } from "react-icons/si";
import { social } from '@/data.js'
import Icon from '@/components/elements/Icon.jsx'
import '@/stylesheets/elements/SocialLinks.css'

const SocialLinks = () => {
	return(
		<div className="Social-links">
			{social.map((s, i) => 
				<a className="Social-link" href={s.link} key={i}>
					<Icon icon={s.icon}/ >
				</a>
			)}
		</div>
	);
}




export default SocialLinks