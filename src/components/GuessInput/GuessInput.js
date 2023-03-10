import React from "react";

function GuessInput({handleSubmitGuess, disabled}) {

  const [guess, setGuess] = React.useState('');
  function handleSubmit (event) {
    event.preventDefault();
    handleSubmitGuess(guess.toUpperCase());
    setGuess('');
  }
  return (<>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={event => setGuess(event.target.value)}
        pattern="[A-Za-z]{5}"
        disabled = {disabled}
      />
    </form>
  </>);
}

export default GuessInput;
