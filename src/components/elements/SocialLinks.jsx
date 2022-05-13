import { SiGithub, SiMedium, SiTwitter, SiInstagram } from "react-icons/si";
import '@/stylesheets/elements/SocialLinks.css'

const SocialLinks = () => {

	const social = [
		{ icon: SiGithub, link: 'https://github.com' },
		{ icon: SiMedium, link: 'https://www.medium.com/' },
		{ icon: SiTwitter, link: 'https://www.twitter.com/' },
		{ icon: SiInstagram, link: 'https://www.instagram.com/' },
	]

	const Icon = (props) => {
	  const { icon } = props
	  const TheIcon = icon
	  return <TheIcon {...props} />;
	}

	return(
		<div className="Social-links">
			{social.map((s, i) => 
				<a className="Social-link" href={s.link} key={i}>
					<Icon icon={s.icon}/>
				</a>
			)}
		</div>
	);
}




export default SocialLinks