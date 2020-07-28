import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
	return (
		<div className="footer-container">
			<FontAwesomeIcon icon={faEnvelope} size="lg" />
			<span>lin1257462400@gmail.com</span>
			<br />
			<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
			<span>Santa Barbara, CA</span>
			<div>
				<a
					href="https://www.linkedin.com/in/dylan-lin-5b2195195"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedin} size="2x" />
				</a>
				<a href="https://github.com/DylanLin29" target="_blank">
					<FontAwesomeIcon icon={faGithubSquare} size="2x" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
