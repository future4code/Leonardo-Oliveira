import { HomeContainer } from "./Home.styled";

const Home = function (): JSX.Element {
  return (
    <HomeContainer>
      <div className="overlay">
        <h1>AirLabex</h1>
        <p>Agende a sua próxima viagem com a gente e realize o seu sonho!</p>
      </div>
    </HomeContainer>
  );
};

export default Home;
