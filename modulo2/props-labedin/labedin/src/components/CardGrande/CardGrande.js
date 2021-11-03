import React from "react";
import { CardGrandeContainer } from "./CardGrandeContainer";

function CardGrande(props) {
  return (
    <CardGrandeContainer>
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
      </div>
    </CardGrandeContainer>
  );
}

export default CardGrande;
