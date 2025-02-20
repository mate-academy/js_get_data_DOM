'use strict';

// write your code here

const populatinsSpans = [...document.querySelectorAll('span.population')];
const averagePopulationSpan = document.querySelector('span.average-population');
const totalPopulationSpan = document.querySelector('span.total-population');

const totalPopulation = populatinsSpans.reduce((accumulator, currentValue) => {
  const population = +currentValue.textContent.replace(/,/g, '');

  return accumulator + population;
}, 0);

const averagePopulation = totalPopulation / populatinsSpans.length;

averagePopulationSpan.textContent = averagePopulation.toLocaleString('en-US');
totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
