import Navbar from "../components/navbar";
import Features from "../components/features";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
import { optionalAuth } from "../utils/auth";
import TodoListInfo from "../components/todoListInfo";
import CardInfo from "../components/cardInfo";

const Home = ({ authenticated }) => {
	return (
		<>
			<Navbar authenticated={authenticated} currentPage="index" />
			<div className="home">
				<div className="container">
					<div className="home-circle-top" />
					<div className="home-circle-bottom" />
					<img src="../images/TodoList.png" />
					<span>TODOLIST</span>
				</div>
			</div>
			<TodoListInfo />
			<CardInfo />
			<Footer />

			{/* <Jumbotron /> */}
			{/* <Features /> */}
		</>
	);
};

export function getServerSideProps(context) {
	const user = optionalAuth(context);
	return { props: { authenticated: user === "" ? false : true } };
}

export default Home;
