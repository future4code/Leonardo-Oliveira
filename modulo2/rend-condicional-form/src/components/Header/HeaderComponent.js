import React, { Component } from "react";
import { Header } from "./style";

export default class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <h3>{this.props.title}</h3>
      </Header>
    );
  }
}
