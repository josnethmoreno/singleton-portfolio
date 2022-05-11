import { DiHtml5, DiCss3, DiBootstrap, DiSass, DiJavascript1, DiReact, DiGithubBadge } from "react-icons/di";
import '@/stylesheets/elements/List.css'

const List = ({ name }) => {
	return(
		<div className="List">
			<h3 className="List-name">{name}</h3>
			<div className="List-items">
				<DiHtml5 />
				<DiCss3 />
				<DiBootstrap />
				<DiSass />
				<DiJavascript1 />
				<DiReact />
			</div>
		</div>
	);
}

export default List