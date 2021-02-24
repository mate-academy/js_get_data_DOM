'use strict';

const populationsList = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let populationSum = 0;

for (const oneContryPopulation of populationsList) {
  const population = +oneContryPopulation.innerText.split(',').join('');

  populationSum += population;
}

const populationAverage = Math.round(populationSum / populationsList.length);

total.innerText = populationSum.toLocaleString('en');
average.innerText = populationAverage.toLocaleString('en');
