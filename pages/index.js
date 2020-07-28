import Navbar from "../components/navbar";
import Features from "../components/features";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
import { optionalAuth } from "../utils/auth";

const Home = ({ authenticated }) => {
	return (
		<>
			<Navbar authenticated={authenticated} />
			<Jumbotron />
			<Features />
			<Footer />
		</>
	);
};

export function getServerSideProps(context) {
	const user = optionalAuth(context);
	return { props: { authenticated: user === "" ? false : true } };
}

export default Home;
