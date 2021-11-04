import React from "react";
import { ImageButtonContainer } from "./ImagemButtonContainer";

function ImagemButton(props) {
  return (
    <ImageButtonContainer>
      <img src={props.imagem} />
      <p>{props.texto}</p>
    </ImageButtonContainer>
  );
}

export default ImagemButton;
