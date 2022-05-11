import Nav from '../elements/Nav'
import '@/stylesheets/sections/Header.css'

const Header = () => {
	return(
		<header className="Header">
			<div className="container">
				<Nav />
			</div>
		</header>
	);
}

export default Header