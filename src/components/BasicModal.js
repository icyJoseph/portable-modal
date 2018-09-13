import React, { Component, Fragment } from "react";
import Portal from "./Portal";

export default class BasicModal extends Component {
  state = { open: false };

  openModal = () =>
    this.setState({
      open: true
    });

  closeModal = () =>
    this.setState({
      open: false
    });

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
