'use strict';

const elements = document.querySelectorAll('.population');
let values = [...elements].reduce((prev, element) => {
  prev.push(element.innerText);

  return prev;
}, []);

values = values.map((value) => {
  const valueConvert = value.split(',').join('');

  return +valueConvert;
});

const total = values.reduce((prev, value) => prev + value, 0);
const average = Math.round(total / values.length);

const totalStyled = getNumberStyled(total);
const averageStyled = getNumberStyled(average);

document.querySelector('.total-population').innerText = totalStyled;
document.querySelector('.average-population').innerText = averageStyled;

function getNumberStyled(number) {
  if (!number) {
    return;
  }

  if (number < 1000) {
    return String(number);
  }

  const numberSeparated = String(number).split('').reverse();
  let finalNumber = '';
  let position = 0;

  for (const num of numberSeparated) {
    position++;

    finalNumber = num + finalNumber;

    if (position === 3) {
      position = 0;
      finalNumber = ',' + finalNumber;
    }
  }

  if (finalNumber[0] === ',') {
    finalNumber = finalNumber.split('');
    finalNumber.shift();
    finalNumber = finalNumber.join('');
  }

  return finalNumber;
}
