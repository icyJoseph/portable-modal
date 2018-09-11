import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";

const Portal = ({ children, closeCallback }) => {
  const composed = (
    <div className="Modal-container">
      <div className="Modal-content">
        {children}
        <button onClick={closeCallback}> Close Basic Modal </button>
      </div>
    </div>
  );
  return ReactDOM.createPortal(composed, document.body);
};

class BasicModal extends Component {
  state = { open: false };

  componentDidMount() {
    this.listener = document.body.addEventListener("click", () => {
      this.closeModal();
    });
  }

  openModal = () =>
    this.setState({
      open: true
    });

  closeModal = () =>
    this.setState({
      open: false
    });

  componentWillUnmount() {
    document.body.removeEventListener("click", this.listener);
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.openModal}> Open Basic Modal </button>
        {this.state.open && (
          <Portal
            children={this.props.children}
            closeCallback={this.closeModal}
          />
        )}
      </Fragment>
    );
  }
}

const MyModalContent = () => (
  <Fragment>
    <p>Hi I am a Basic Modal</p>
    <p>Clicking outside won't close me on iOS</p>
  </Fragment>
);

class App extends Component {
  state = { open: false, counter: 0, fixed: false };

  componentDidMount() {
    document.body.addEventListener("click", () =>
      this.setState(prevState => ({ counter: prevState.counter + 1 }))
    );
  }

  iOSFix = () => {
    if ("ontouchstart" in document.documentElement) {
      const highlight = "-webkit-tap-highlight-color";
      document.body.style.cursor = "pointer";
      document.body.style[highlight] = "transparent";
    }
    return this.setState({ fixed: true });
  };

  render() {
    const { counter, fixed } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Modals Experiment</h1>
        </header>
        <p className="App-intro">Body clicks counter: {counter}</p>
        <BasicModal>
          <MyModalContent />
        </BasicModal>
        <div className="Fix-iOS">
          {fixed ? (
            <div>Enjoy!</div>
          ) : (
            <button onClick={this.iOSFix}>Fix for iOS</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
