'use strict';

const populations = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let populationSum = 0;

for (const onePopulation of populations) {
  const population = +onePopulation.innerText.split(',').join('');

  populationSum += population;
}

const populationAverage = Math.round(populationSum / populations.length);

total.innerText = populationSum.toLocaleString('en-US');
average.innerText = populationAverage.toLocaleString('en-US');
