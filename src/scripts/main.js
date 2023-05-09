'use strict';

const population = document.querySelectorAll('.population');
const popValue = [];

for (const character of population) {
  popValue.push(getNumber(character.innerText));
}

function getNumber(string) {
  let number = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ',') {
      number += string[i];
    }
  }

  return +number;
}

const total = popValue.reduce((sum, x) => sum + x, 0);
const average = total / popValue.length;

function getNewFormat(number) {
  const transform = number.toString().split('');

  for (let i = transform.length - 1; i >= 0; i--) {
    if ((transform.length - i) % 3 === 0 && i !== 0) {
      transform[i] = ',' + transform[i];
    }
  }

  return transform.join('');
}

document.querySelector('.total-population').innerText = getNewFormat(total);
document.querySelector('.average-population').innerText = getNewFormat(average);
