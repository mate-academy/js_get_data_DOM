'use strict';

const allDataPopulations = document.querySelectorAll('.population');

const numbers = [...allDataPopulations].map((i) => {
  return +i.textContent.split(',').join('');
});

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = numbers.reduce((acm, val) => acm + val, 0);

let average;

if (numbers.length) {
  average = total / numbers.length;
} else {
  average = 0;
}

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
