'use strict';

const populationsCollection = document.getElementsByClassName('population');
const populationsArray = [];

for (const element of populationsCollection) {
  populationsArray.push(Number(element.textContent.split(',').join('')));
}

const total = populationsArray.reduce((a, b) => a + b);
const average = total / populationsArray.length;

document.querySelector('.total-population').textContent
= total.toLocaleString();

document.querySelector('.average-population').textContent
= average.toLocaleString();
