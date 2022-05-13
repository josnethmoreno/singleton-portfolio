import '@/stylesheets/elements/Button.css'


const Button = ({ text, link }) => {
	return(
		<button className="Button" href={`mailto:${link}`}>
			<a className="Button-text">
				{ text }
			</a>
		</button>
	);
}

export default Button