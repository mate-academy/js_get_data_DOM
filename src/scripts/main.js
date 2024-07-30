'use strict';

const populationNumber = document.querySelectorAll('.population');
let total = 0;
let count = 0;

for (const elem of populationNumber) {
  const number = parseFloat(elem.textContent.replace(/,/g, ''));

  if (!isNaN(number)) {
    total += number;
    count++;
  }
}

const average = total / count;

const totalElem = document.querySelector('.total-population');
const averageElem = document.querySelector('.average-population');

totalElem.innerHTML = total.toLocaleString('en-US');
averageElem.innerHTML = average.toLocaleString('en-US');
