import React, { Component } from "react";
import { AppStyled } from "./App.styled";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

export default class App extends Component {
  state = {
    itens: [],
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
    event.prevent.default();
  };

  addItem = (event) => {
    event.prevent.default();
    const newItens = this.state.currentItem;

    if (newItens.text !== "") {
      const itens = [...this.state.itens, newItens];
      this.setState({
        itens: itens,
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
        <List itens={this.state.itens}></List>
      </AppStyled>
    );
  }
}
