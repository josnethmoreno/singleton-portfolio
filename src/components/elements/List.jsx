import { DiHtml5, DiCss3, DiBootstrap, DiSass, DiJavascript1, DiReact, DiGithubBadge } from "react-icons/di";
import '@/stylesheets/elements/List.css'

const List = ({ name }) => {
	return(
		<div className="List">
			<h3 className="List-name">{name}</h3>
			<ul className="List-items">
				<li className="List-item">
					<span className="List-tooltip">HTML</span>
					<DiHtml5 />
				</li>
				<li className="List-item">
					<span className="List-tooltip">CSS</span>
					<DiCss3 />
				</li>
				<li className="List-item">
					<span className="List-tooltip">Bootstrap</span>
					<DiBootstrap />
				</li>
				<li className="List-item">
					<span className="List-tooltip">SASS</span>
					<DiSass />
				</li>
				<li className="List-item">
					<span className="List-tooltip">Javascript</span>
					<DiJavascript1 />
				</li>
				<li className="List-item">
					<span className="List-tooltip">RactJS</span>
					<DiReact />
				</li>
			</ul>
		</div>
	);
}

export default List