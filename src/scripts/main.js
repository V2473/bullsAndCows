const bullsAndCows = require('../scripts/bullsAndCows.js');
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
