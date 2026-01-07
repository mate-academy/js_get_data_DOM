'use strict';

const allPopulations = document.querySelectorAll('.population');
let totalPopulation = 0;

allPopulations.forEach((element) => {
  const population = +element.textContent.split(',').join('');

  if (!isNaN(population)) {
    totalPopulation += population;
  }
});

const averagePopulation = Math.round(totalPopulation / allPopulations.length);

const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

totalEl.textContent = totalPopulation.toLocaleString('en-US');
averageEl.textContent = averagePopulation.toLocaleString('en-US');
