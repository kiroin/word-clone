/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export function checkGuessForWin(checkedGuess) {
  // checks all characters for correct;
  return checkedGuess.every(char => char.status === 'correct');
}

// on submit of each guess, check letter success
// receive guess, letterStatus, for each letter in guess, progressively overwrite status if misplaced, or incorrect for each letter
export function checkLetterStatus(guess, letterStatus) {
  let nextLetterStatus = { ...letterStatus };
  const statusValueMap = [
    'default', 'incorrect', 'misplaced', 'correct'
  ];
  guess.forEach(char => {
    let letter = char.letter;
    if(char.status === undefined) {
      return
    }
    let statusValue = statusValueMap.findIndex(status => status === char.status);
    let keyStatusValue = statusValueMap.findIndex(status => status === nextLetterStatus[letter]);
    let newStatusValue = Math.max(statusValue, keyStatusValue);
    if(newStatusValue > 0) {
      nextLetterStatus[letter] = statusValueMap[newStatusValue];
    }


  });

  return nextLetterStatus;
}