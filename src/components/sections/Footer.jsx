import { RiGitBranchLine, RiStarFill } from "react-icons/ri";
import ScrollToTop from '@/components/elements/ScrollToTop'
import '@/stylesheets/sections/Footer.css'

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="container">
				<p className="Footer-author">
					Design & Built by
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
						21
					</div>					
					<div className="Footer-stats-star">
						<span className="Footer-stats-icon">
							<RiStarFill />
						</span>
						100
					</div>					
				</div>
				<ScrollToTop />
			</div>
		</footer>
	);
}

export default Footer