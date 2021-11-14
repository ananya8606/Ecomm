import { Component } from "react";

export default function Toggle() {
  state = {
    on: false,
    off: true
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
      off: !this.state.off
    });
  };
    const { children } = this.props;
    return children({
      on: this.state.on,
      off: this.state.off,
      toggle: this.toggle
    });
}
