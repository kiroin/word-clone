import React from "react";

function Banner({ type, numGuesses, answer, newGame }) {
  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${numGuesses} guesses`}</strong>.
      </p>
      <button
        className="new-game"
        onClick={newGame}>
        New Game
      </button>
    </div>
  );

  const sadBanner = (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <button
        className="new-game"
        onClick={newGame}>
        New Game
      </button>
    </div>
  );

  let content = (<></>);
  if (type === 'won') {
    content = happyBanner;
  } else if (type === 'lost') {
    content = sadBanner;
  }

  return <div>{content}</div>;
}

export default Banner;
