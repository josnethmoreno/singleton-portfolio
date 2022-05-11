import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGithubBadge } from "react-icons/di";
import { RiArrowRightLine } from "react-icons/ri";
import '@/stylesheets/elements/Card.css'

const Card = () => {
	return(
		<div className="Card">
			<h3 className="Card-h3">Todo project</h3>
			<p className="Card-description">
				Vestibulum mattis tincidunt ligula in tem vestibulum tristique sapien at odio euis condimentum condimentum. 
			</p>
			<div className="Card-tech">
				<DiHtml5 />
				<DiCss3 />
				<DiJavascript1 />
				<DiReact />
			</div>
			<div className="Card-links">
				<a href="#" className="Card-link-project">
					View Project <RiArrowRightLine className="Card-icon-arrow"/>
				</a>
				<a href="#" className="Card-link-github">
					<DiGithubBadge className="Card-icon-github"/>
				</a>
			</div>
		</div>
	);
}

export default Card