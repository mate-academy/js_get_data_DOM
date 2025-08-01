'use strict';

const arrayPopupation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let sum = 0;

for (let el of arrayPopupation) {
  el = Number(el.textContent.split(',').join(''));
  sum += el;
}

const average = sum / arrayPopupation.length;

totalPopulation.textContent = sum.toLocaleString();
averagePopulation.textContent = Math.round(average).toLocaleString();
