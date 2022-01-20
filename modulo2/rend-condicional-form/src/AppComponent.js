import React, { Component } from "react";
import FormComponent from "./components/Form/FormComponent";
import { App } from "./style";

export default class AppComponent extends Component {
  render() {
    return (
      <App>
        <FormComponent />
      </App>
    );
  }
}
