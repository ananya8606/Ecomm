import { Component } from "react";
export default function Toggle() {
  state = {
    on: false,
    off: true
  };
  const [on, seton] = useState("false");
const[off, setoff]=useState("true");
  const handleToggle = () => {
    seton(!on);
    setoff(!off);
  };
return({handleToggle});
  }
