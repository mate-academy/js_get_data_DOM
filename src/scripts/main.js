'use strict';

const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements).map((element) => {
  const text = element.innerText;
  let numberString = '';

  for (const char of text) {
    if (!isNaN(char) && char !== ' ') {
      numberString += char;
    }
  }

  return parseInt(numberString, 10);
});

const total = populations.reduce((prev, item) => {
  return prev + item;
}, 0);

const average = total / populations.length;

document.querySelector('.total-population').innerText =
  total.toLocaleString('en-US');

document.querySelector('.average-population').innerText = Number(
  average.toFixed(0),
).toLocaleString('en-US');
