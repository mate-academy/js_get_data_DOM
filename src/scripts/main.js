'use strict';

const numbers = document.querySelectorAll('.population');
let totalNumber = 0;

for (const number of numbers) {
  const correctNumber = +(number.innerHTML.split('')
    .filter(item => item !== ',').join(''));

  totalNumber += correctNumber;
}

const averageNumber = totalNumber / numbers.length;

document.querySelector('.total-population').innerHTML = totalNumber
  .toLocaleString('en-US');

document.querySelector('.average-population').innerHTML = averageNumber
  .toLocaleString('en-US');
