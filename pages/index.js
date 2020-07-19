import Navbar from "../components/navbar";
import Features from "../components/features";
import Jumbotron from "../components/jumbotron";

const Home = ({ authenticated }) => {
  return (
    <>
      <Navbar authenticated={authenticated}/>
      <Jumbotron />
      <Features />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  if (ctx.req?.headers.cookie) {
    return { authenticated: true };
  }
  return { authenticated: false };
}

export default Home;
