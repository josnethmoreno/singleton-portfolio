import List from '../elements/List.jsx';
import '@/stylesheets/sections/Stack.css'

const Stack = () => {
	return(
		<section className="Stack section" id="stack">
			<div className="container">
				<h1 className="Stack-h1 section-head"><span>02</span> STACK</h1>
				<div className="container-sm">
					<div className="Stack-wrapper">
						<List name="Front End"/>
						<List name="Back End"/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Stack