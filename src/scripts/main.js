'use strict';

function bullsAndCows(generatedNumber, enteredNumber) {
  const acceptedLength = 4;

  for (const argument of arguments) {
    if (!(Number.isInteger(+argument) && argument.length === acceptedLength)) {
      throw new Error('Should be 4 different digits');
    }

    const items = {};

    for (const item of argument) {
      if (!items[item]) {
        items[item] = 0;
      }
      items[item] += 1;
    }

    for (const item in items) {
      if (items[item] > 1) {
        throw new Error('Should be 4 different digits');
      }
    }
  }

  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < acceptedLength; i++) {
    if (generatedNumber[i] === enteredNumber[i]) {
      result.bulls++;
    }

    for (let j = 0; j < acceptedLength; j++) {
      if (generatedNumber[i] === enteredNumber[j] && i !== j) {
        result.cows++;
      }
    }
  }

  return result;
}

const output = document.querySelector('.output');
let input;

document.querySelector('.input').oninput = function() {
  output.innerHTML = document.querySelector('.input').value;
  input = document.querySelector('.input').value;
};

function randomiser() {
  let str = '';

  str += Math.floor(Math.random() * 10);
  str += Math.floor(Math.random() * 10);
  str += Math.floor(Math.random() * 10);
  str += Math.floor(Math.random() * 10);

  try {
    bullsAndCows('1234', str);
  } catch (e) {
    randomiser();
  }

  return str;
}

const random = randomiser();

document.querySelector('.start').onclick = function() {
  try {
    bullsAndCows(input, random);
  } catch (e) {
    output.innerHTML = e;
  }

  const answer = bullsAndCows(input, random);

  const newLI = document.createElement('LI');
  let text;

  if (answer.bulls === 4) {
    text = document.createTextNode(`WINNER! Answer is ${input}!`);
  } else {
    text = document.createTextNode(`
    ${input} - Cows: ${answer.cows} Bulls: ${answer.bulls}
    `);
  }

  newLI.appendChild(text);
  document.getElementById('list').appendChild(newLI);
};
