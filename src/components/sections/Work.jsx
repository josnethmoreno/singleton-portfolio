import Card from '@/components/elements/Card'
import '@/stylesheets/sections/Work.css'


 const Work = () => {
	return(
		<section className="Work section" id="work">
			<div className="container">
				<h2 className="section-head"><span>01</span> Work</h2>
				<div className="container-sm">
					<div className="Work-wrapper">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Work