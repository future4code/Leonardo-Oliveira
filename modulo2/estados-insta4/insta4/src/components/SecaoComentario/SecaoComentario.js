import React, { Component } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

export class SecaoComentario extends Component {
  render() {
    console.log(this.props);
    return (
      <CommentContainer>
        <InputComentario
          placeholder={"Comentário"}
          value={this.props.comentario}
          onChange={this.props.onChangeComentario}
        />
        <button onClick={this.props.aoEnviar}>Enviar</button>
      </CommentContainer>
    );
  }
}
