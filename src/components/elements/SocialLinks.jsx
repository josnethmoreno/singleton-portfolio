import { v4 as uuidv4 } from 'uuid'
import { social } from '@/data.js'
import Icon from '@/components/elements/Icon.jsx'
import '@/stylesheets/elements/SocialLinks.css'

const SocialLinks = () => {
	return(
		<div className="Social-links">
			{
				social.map((s) => 
					<a className="Social-link" href={s.link} key={uuidv4()}>
						<Icon icon={s.icon}/ >
					</a>
				)
			}
		</div>
	);
}




export default SocialLinks