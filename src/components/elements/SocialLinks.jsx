import { RiGithubFill, RiCodepenFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import '@/stylesheets/elements/SocialLinks.css'

const SocialLinks = () => {
	return(
		<div className="Social-links">
			<a className="Social-link" href="">
				<RiGithubFill />
			</a>
			<a className="Social-link" href="">
				<RiCodepenFill />
			</a>
			<a className="Social-link" href="">
				<RiTwitterFill />
			</a>
			<a className="Social-link" href="">
				<RiInstagramLine />
			</a>
		</div>
	);
}

export default SocialLinks