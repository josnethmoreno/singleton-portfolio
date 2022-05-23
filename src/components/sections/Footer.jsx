import axios from 'axios'
import React from 'react';
import { RiGitBranchLine, RiStarFill } from "react-icons/ri";
import ScrollToTop from '/src/components/elements/ScrollToTop'
import '/src/stylesheets/sections/Footer.css'

const Footer = () => {

	const url = 'https://api.github.com/repos/josnethmoreno/singleton';
	const [github, setGithub] = React.useState(false);

	React.useEffect(() => {
    axios.get(url).then((res) => {
      setGithub(res.data);
    });
  }, []);

	return (
		<footer className="Footer">
			<div className="container">
				<p className="Footer-author">
					Design & Built by:
					<a
						href="https://www.josnethmoreno.vercel.app" 
						className="Footer-author-link"
						target="_blank"
						rel="noopener">
						Josneth Moreno
					</a> 
				</p>
				<div className="Footer-stats">
					<div className="Footer-stats-fork">
						<span className="Footer-stats-icon">
							<RiGitBranchLine />
						</span>
						{(github) && github.forks_count}
					</div>					
					<div className="Footer-stats-star">
						<span className="Footer-stats-icon">
							<RiStarFill />
						</span>
						{(github) && github.stargazers_count}
					</div>					
				</div>
				<ScrollToTop />
			</div>
		</footer>
	);
}

export default Footer