import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { optionalAuth } from "../utils/auth";
import TodoListInfo from "../components/todoListInfo";
import CardInfo from "../components/cardInfo";

const Home = ({ authenticated }) => {
	return (
		<>
			<Navbar authenticated={authenticated} currentPage="index" />
			<div className="home">
				<div className="home-circle-top" />
				<div className="home-circle-bottom" />
				<div className="todolist-title">
					<img src="../images/TodoList.png" />
					<div className="todolist-title-button">
						<span>{authenticated ? "WELCOME" : "TODOLIST"}</span>
						{authenticated ? (
							<a href="/todo">Create a todo!</a>
						) : (
							<a href="/login">Get Started!</a>
						)}
					</div>
				</div>
			</div>
			<TodoListInfo />
			<CardInfo />
			<Footer />
		</>
	);
};

export function getServerSideProps(context) {
	const user = optionalAuth(context);
	return { props: { authenticated: user === "" ? false : true } };
}

export default Home;
