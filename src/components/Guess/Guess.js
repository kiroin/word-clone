import React from "react";
import {range} from "../../utils"


function Guess({ guess }) {
  let slots = range(5).map(()=>({letter:'', status: 'clear'})); // set default slots to empty

  if(guess) {
    slots = [...guess];
  }
  return (
    <p className="guess">
      {slots.map((slot, index) => (
        <span key={index} className={`cell ${slot.status}`}>
          {slot.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
