'use strict';

const people = document.querySelectorAll('span');
const total = [...people]
  .map(x => +x.innerText
    .split(',')
    .join(''))
  .splice(0, 10)
  .reduce((start, a) => start + a);

const average = total / 10;

document.querySelector('.total-population').innerText = total;
document.querySelector('.average-population').innerText = average;
