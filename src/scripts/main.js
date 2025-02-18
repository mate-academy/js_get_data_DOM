'use strict';

// write your code here
const populationData = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const array = Array.from(populationData).map(
  (el) => Number(el.textContent.replace(/,/g, '')),
  // eslint-disable-next-line function-paren-newline
);

const totalSum = array.reduce((prevValue, value) => prevValue + value, 0);

const averageSum = array.length > 0 ? totalSum / array.length : 0;

if (totalPopulation) {
  totalPopulation.outerHTML = `<span class="total-population">${totalSum.toLocaleString()}</span>`;
}

if (averagePopulation) {
  averagePopulation.outerHTML = `<span class="average-population">${averageSum.toLocaleString()}</span>`;
}
