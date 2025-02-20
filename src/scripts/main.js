'use strict';

const populationSpans = [...document.querySelectorAll('span.population')];
const totalPopulation = populationSpans.reduce((acc, num) => {
  const number = +num.textContent.replace(/,/g, '');

  return number + acc;
}, 0);
const avaragePopulation = totalPopulation / populationSpans.length;

const totalPopulationSpan = document.querySelector('.total-population');
const avaragePopulationSpan = document.querySelector('.average-population');

totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
avaragePopulationSpan.textContent = avaragePopulation.toLocaleString('en-US');
