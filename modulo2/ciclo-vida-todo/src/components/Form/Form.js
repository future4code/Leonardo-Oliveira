import React, { Component } from "react";
import { FormStyle } from "./Form.style";

export default class Form extends Component {
  render() {
    return (
      <FormStyle>
        <div className="todo-list">
          <input type="text" placeholder="Insira a sua tarefa" />
          <button type="submit">Adicionar tarefa</button>
        </div>
      </FormStyle>
    );
  }
}
