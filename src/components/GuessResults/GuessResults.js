import React from "react";
import Guess from '../Guess';


function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <Guess
          guess={guess}
          key={index}
        />
      ))}
    </div>
  );
}

export default GuessResults;
