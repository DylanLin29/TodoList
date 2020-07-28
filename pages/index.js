import Navbar from "../components/navbar";
import Features from "../components/features";
import Jumbotron from "../components/jumbotron";
import { optionalAuth } from "../utils/auth";

const Home = ({ authenticated }) => {
	return (
		<>
			<Navbar authenticated={authenticated} />
			<Jumbotron />
			<Features />
		</>
	);
};

export function getServerSideProps(context) {
	const user = optionalAuth(context);
	return { props: { authenticated: user === "" ? false : true } };
}

export default Home;
