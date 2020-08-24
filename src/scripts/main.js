'use strict';

const popsCollection = document.getElementsByClassName('population');
const popsArray = [];

for (const element of popsCollection) {
  popsArray.push(Number(element.textContent.split(',').join('')));
}

const total = popsArray.reduce((a, b) => a + b);
const average = total / popsArray.length;

document.querySelector('.total-population').textContent = total;
document.querySelector('.average-population').textContent = average;
