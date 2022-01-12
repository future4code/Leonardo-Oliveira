import viagemIMG from "../../assets/plane_02.jpg";
import { IViagemDTO } from "../../interfaces/InfoDTO";
import { CardViagemContainer } from "./CardViagem.styled";

const CardViagem = function (props: IViagemDTO): JSX.Element {
  const { name, planet, description, durationInDays, date } = props;
  return (
    <CardViagemContainer>
      <div className="title">{name}</div>
      <div className="image-card">
        <img src={viagemIMG} alt="viagem-img" />
      </div>
      <div className="text-card">
        <span className="strong">Descrição:</span>
        <span className="span-block"> {description}</span>
        <br />
        <span className="strong">Planeta:</span>
        <span className="span-block"> {planet}</span>
        <br />
        <span className="strong">Duração:</span>
        <span className="span-block"> {durationInDays}</span>
        <br />
        <span className="strong">Data:</span>
        <span className="span-block"> {date}</span>
      </div>
    </CardViagemContainer>
  );
};

export default CardViagem;
