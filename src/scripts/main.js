'use strict';

const bodyElements = document.body.getElementsByClassName('population');

const numbers = [];

for (let i = 0; i < bodyElements.length; i++) {
  const newElement = bodyElements[i].textContent.replace(/,/g, '');

  numbers.push(Number(newElement));
}

const summ = numbers.reduce((acc, num) => acc + num, 0);
const average = summ / numbers.length;

const averageSolution = document.querySelector('.average-population');

averageSolution.textContent = average.toLocaleString('en-US');

const summSolution = document.querySelector('.total-population');

summSolution.textContent = summ.toLocaleString('en-US');
