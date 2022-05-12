import '@/stylesheets/elements/Button.css'


const Button = ({ text }) => {
	return(
		<button className="Button">
			<a className="Button-text" href={`mailto:josnethmoreno@gmail.com`}>{ text }</a>
		</button>
	);
}

export default Button