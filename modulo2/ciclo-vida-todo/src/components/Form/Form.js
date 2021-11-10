import React from "react";
import { FormStyle } from "./Form.style";

const Form = (props) => {
  console.log(props.text);
  return (
    <FormStyle onSubmit={props.addItem}>
      <div className="todo-list">
        <input
          type="text"
          placeholder="Insira a sua tarefa"
          value={props.text}
          onChange={props.handleInput}
        />
        <button type="submit">Adicionar tarefa</button>
      </div>
    </FormStyle>
  );
};

export default Form;
