import BtnAnimado from "../../components/BtnAnimado/BtnAnimado";
import CardViagem from "../../components/CardViagem/CardViagem";
import { useViagem } from "../../context/Data";
import { IViagemDTO } from "../../interfaces/InfoDTO";
import { ViagemPageContainer } from "./ViagemPage.styled";

const ViagemPage = function (): JSX.Element {
  const { viagens } = useViagem();

  return (
    <div className="page-viagem">
      <div className="btn">
        <BtnAnimado />
      </div>
      <ViagemPageContainer>
        {viagens &&
          viagens.map((viagem: IViagemDTO) => {
            const { id, date, description, durationInDays, planet, name } =
              viagem;
            return (
              <CardViagem
                key={id}
                date={date}
                description={description}
                durationInDays={durationInDays}
                planet={planet}
                name={name}
              />
            );
          })}
      </ViagemPageContainer>
    </div>
  );
};

export default ViagemPage;
