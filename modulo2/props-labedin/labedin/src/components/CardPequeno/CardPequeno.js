import React from "react";

import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div id="smallcard-container">
      <div className="itens-small-container">
        <a href="#">
          <i class={`${props.icon}`}></i>
        </a>
        <h4 id="nome-h4">{props.nomeProp}</h4>
        <p>{props.valorProp}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
