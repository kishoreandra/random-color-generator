import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("#458FF2");

  const genColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setColor("#" + n.slice(0, 6));
  };

  document.body.style.background = color;
  return (
    <div>
      <button className="app-btn" onClick={genColor}>
        Click to Generate random colors
      </button>

      <h2 className="app-color-code">The color generated is : {color}</h2>
    </div>
  );
};

export default App;
