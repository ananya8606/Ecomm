import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Toggle = () => {
  const [isOff, setIsOff] = useState(true);

  return (
    <button onClick={() => setIsOff(!isOff)}>{ isOff ? 'ON' : 'OFF' }</button>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
