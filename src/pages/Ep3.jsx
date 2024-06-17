import React from "react";
import "./ep3.css";

const Ep3 = () => {
  return (
    <div>
      <output>
        <sup>$</sup>
        <div id="$demo">
          <span></span>
          <comma></comma>
          <span>9</span>
          <span>9</span>
          <span>9</span>
        </div>
      </output>
      <fieldset>
        <input type="range" min="0" max="2023" value="999" id="$demoslide" />
        <input type="number" min="0" max="2023" value="999" id="$demonum" />
      </fieldset>
    </div>
  );
};

export default Ep3;
