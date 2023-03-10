import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess, checkGuessForWin, checkLetterStatus } from '../../game-helpers'
import Banner from '../Banner'
import Keyboard from '../Keyboard'

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [guessList, setGuessList] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(() => ''));
  const [numGuesses, setNumGuesses] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('ongoing'); // ongoing | won | lost
  // const sampleLetterStatus = { 'A': 'correct' , 'M': 'incorrect', 'R': 'misplaced' };
  const [letterStatus, setLetterStatus] = React.useState({});

  function handleSubmitGuess(guess) {

    let nextNumGuesses = numGuesses + 1;
    setNumGuesses(nextNumGuesses);

    let checkedGuess = checkGuess(guess, answer);

    const nextGuessList = [...guessList];
    nextGuessList[numGuesses] = checkedGuess;
    setGuessList(nextGuessList);

    // set keyboard
    let nextLetterStatus = checkLetterStatus(checkedGuess, letterStatus);
    setLetterStatus(nextLetterStatus);

    // check for win/lose
    if (checkGuessForWin(checkedGuess)) {
      setGameStatus('won');
    } else if (nextNumGuesses >= NUM_OF_GUESSES_ALLOWED) {
      // lose
      setGameStatus('lost');
    }

  }


  function newGame() {
    setAnswer(sample(WORDS));
    setGuessList(range(NUM_OF_GUESSES_ALLOWED).map(() => ''));
    setNumGuesses(0);
    setGameStatus('ongoing');
    setLetterStatus({});
  }

  return <>

    <GuessResults guessList={guessList} />
    <Keyboard letterStatus={letterStatus} />

    <GuessInput
      handleSubmitGuess={handleSubmitGuess}
      disabled={gameStatus !== 'ongoing' ? true : false}
    />
    <Banner
      type={gameStatus}
      numGuesses={numGuesses}
      answer={answer}
      newGame={newGame}
    ></Banner>

  </>;
}

export default Game;
