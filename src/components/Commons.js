import React, { Fragment } from "react";
import logo from "../logo.svg";

export const MyModalContent = () => (
  <Fragment>
    <p>Hi I am a Basic Modal</p>
    <p>Clicking outside won't close me on iOS</p>
  </Fragment>
);

export const ReactHeader = ({ counter }) => (
  <Fragment>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Modals Experiment</h1>
    </header>
    <p className="App-intro">Body clicks counter: {counter}</p>
  </Fragment>
);
