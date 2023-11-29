'use strict';

const populationPerCounty = document.querySelectorAll('.population');

const totalPopulation = [...populationPerCounty].reduce((acc, el) => {
  const population = Number(el.textContent.replaceAll(',', ''));

  return acc + population;
}, 0);

const averagePopulation = totalPopulation / populationPerCounty.length;

document.querySelector('.total-population')
  .textContent = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population')
  .textContent = averagePopulation.toLocaleString('en-US');
