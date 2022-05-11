import '@/stylesheets/elements/Button.css'


const Button = ({ text }) => {
	return(
		<button className="Button">
			{text}
		</button>
	);
}

export default Button