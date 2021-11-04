import React from "react";

import { CardPequenoContainer } from "./CardPequenoContainer";

function CardPequeno(props) {
  return (
    <CardPequenoContainer>
      <a href="#">
        <i class={`${props.icon}`}></i>
      </a>
      <h4 id="nome-h4">{props.nomeProp}</h4>
      <p>{props.valorProp}</p>
    </CardPequenoContainer>
  );
}

export default CardPequeno;
