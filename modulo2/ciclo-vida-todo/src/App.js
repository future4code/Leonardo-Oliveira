import React, { Component } from "react";
import { AppStyled } from "./App.styled";
import Form from "./components/Form/Form";

export default class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };

  //Passar os valores do state e funções via props pro COmponente FOrm
  handleInput = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (event) => {
    event.prevent.default();
    const newItens = this.state.currentItem;

    if (newItens.text !== "") {
      const itens = [...this.state.items, newItens];
      this.setState({
        items: itens,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  render() {
    return (
      <AppStyled>
        <Form
          addItem={this.addItem}
          text={this.state.currentItem.text}
          handleInput={this.handleInput}
        ></Form>
      </AppStyled>
    );
  }
}
