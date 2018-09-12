import React, { Component } from "react";
import BasicModal from "./components/BasicModal";
import FixButton from "./components/FixButton";
import { MyModalContent, ReactHeader } from "./components/Commons";
import { bodyClickFix } from "./utils";

import "./App.css";

export default class App extends Component {
  state = { open: false, counter: 0, fixed: false };

  componentDidMount() {
    document.body.addEventListener("click", this.countUp);
  }

  countUp = () =>
    this.setState(prevState => ({ counter: prevState.counter + 1 }));

  fix = () => bodyClickFix(this.setFix);

  setFix = () => this.setState({ fixed: true });

  render() {
    const { counter, fixed } = this.state;
    return (
      <div className="App">
        <ReactHeader counter={counter} />
        <BasicModal>
          <MyModalContent />
        </BasicModal>
        <FixButton fixed={fixed} callback={this.fix} />
      </div>
    );
  }
}
