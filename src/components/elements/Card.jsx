import { v4 as uuidv4 } from 'uuid'
import { SiGithub } from 'react-icons/si'
import { RiArrowRightLine } from 'react-icons/ri'
import Icon from '/src/components/elements/Icon.jsx'
import '/src/stylesheets/elements/Card.css'

const Card = ({ name, description, stack, linkProject, linkGithub }) => {
	return (
		<div className='Card'>
			<h3 className='Card-h3'>{name}</h3>
			<p className='Card-description'>{description}</p>
			<div className='Card-tech'>
				{stack.map((s) => (
					<Icon icon={s.icon} key={uuidv4()} />
				))}
			</div>
			<div className='Card-links'>
				<a href={linkProject} className='Card-link-project' target='_blank'>
					View Project <RiArrowRightLine className='Card-icon-arrow' />
				</a>
				<a href={linkGithub} className='Card-link-github' target='_blank'>
					<SiGithub className='Card-icon-github' />
				</a>
			</div>
		</div>
	)
}

export default Card
