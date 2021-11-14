import { Component } from "react";

export default function Toggle() {
const [on, seton] = useState(false);
const [off, setoff] = useState(true);

  toggle = () => {
seton(!this.state.on);
setoff(!this.state.off);
  };
    const { children } = this.props;
    return children({
      on: this.state.on,
      off: this.state.off,
      toggle: this.toggle
    });
}
