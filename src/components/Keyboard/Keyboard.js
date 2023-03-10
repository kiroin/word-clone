import React from "react";


// on submit of each guess, check letter success
// pass letter styling in
// for each letter in row, check style


function Keyboard({ letterStatus }) {

  // set default letter, if found in letter status, set status

  let qwertyLayout = [
    'QWERTYUIOP',
    'ASDFGHJKL',
    'ZXCVBNM'
  ];
  let lettersInLayout = getLetterRows(qwertyLayout);


  // takes in array of strings denoting character layout, returns array of letter objects
  function getLetterRows(layoutRows) {
    return layoutRows.map(row => row.split('').map(setLetter));
  }

  // takes in a char, creates letter, sets status based on status array
  function setLetter(char) {
    return { char: char, status: letterStatus[char] };
  }


  return (
    <div className="keyboard">
      {lettersInLayout.map((row, index) => (
        <div
          className="key-row"
          key={index}
        >
          {row.map((letter, index) => (
            <div
              className={`key ${letter.status}`}
              key={index}
            >
              {letter.char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
