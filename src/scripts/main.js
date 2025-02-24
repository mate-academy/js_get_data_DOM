'use strict';

const populationTags = [...document.querySelectorAll('span.population')];
const populations = Array.from(populationTags).map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''));
});

const totalPopulation = populations.reduce((sum, el) => sum + el, 0);
const averagePopulation = Math.round(totalPopulation / populations.length);

document.querySelector('span.average-population').innerText = averagePopulation;

document.querySelector('span.total-population').innerText = totalPopulation;
