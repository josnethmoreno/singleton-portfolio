import '/src/stylesheets/elements/Button.css'

const Button = ({ text, link }) => {
	return (
		<button className='Button'>
			<a className='Button-link' href={`mailto:${link}`}>
				<span className='Button-text'>{text}</span>
			</a>
		</button>
	)
}

export default Button
