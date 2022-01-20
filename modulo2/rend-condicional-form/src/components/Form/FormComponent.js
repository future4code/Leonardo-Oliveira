import React, { Component } from "react";
import { Form } from "./style";
import SelectComponent from "../Select/SelectComponent";
import HeaderComponent from "../Header/HeaderComponent";

export default class FormComponent extends Component {
  state = {};
  render() {
    const pipipoo = (
      <Form>
        <HeaderComponent title="ETAPA 1 - DADOS GERAIS"></HeaderComponent>
        <div className="input-form">
          <p>1. Qual é o seu nome?</p>
          <input type="text" />
        </div>
        <div className="input-form">
          <p>2. Qual é a sua idade?</p>
          <input type="text" />
        </div>
        <div className="input-form">
          <p>3. Qual seu email?</p>
          <input type="text" />
        </div>
        <div className="input-form">
          <p>4. Qual a sua escolaridade?</p>
          <SelectComponent></SelectComponent>
        </div>
      </Form>
    );

    return <>{pipipoo}</>;
  }
}

// Input Form é um component (props para ser input ou select)
// Header com h3 é um compomente (passar valores via props)
// O Form com botão e header é outro componente?
// Select é um component (passar valores via props)
